import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { exportSlidev } from './export-slidev.mjs';
const runtimeModules = process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES;
if (!runtimeModules) throw new Error('CODEX_PRIMARY_RUNTIME_NODE_MODULES is required (Codex Work runtime).');
const requireRuntime = createRequire(path.join(runtimeModules, 'package.json'));
const { Presentation, PresentationFile } = await import(pathToFileURL(requireRuntime.resolve('@oai/artifact-tool')).href);
const SKILL = process.env.PRESENTATIONS_SKILL_DIR || '/root/.codex/skills/builtins/presentations';
const { finalizePresentation } = await import(pathToFileURL(path.join(SKILL, 'container_tools/artifact_tool_utils.mjs')).href);
process.env.RUNTIME_NODE_MODULES = runtimeModules;
process.env.RUNTIME_NODE = process.env.CODEX_PRIMARY_RUNTIME_NODE;

const deckDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(deckDir,'../..');
const build=path.join(root,'.build');
await fs.mkdir(build,{recursive:true});
const revision=await fs.mkdtemp(path.join(build,'grill-me-'));
const output=path.join(deckDir,'artifacts');
const webSlides=[];
const webTexts=new WeakMap();
const font='Noto Sans JP';
const mono='DejaVu Sans Mono';
const C={bg:'#F7F8FA',white:'#FFFFFF',ink:'#17283A',sub:'#526375',blue:'#145AB0',teal:'#8AD8D4',dark:'#142638',line:'#D4DCE5'};
const p=Presentation.create({slideSize:{width:1280,height:720}});
const sources={repo:'https://github.com/mattpocock/skills',grill:'https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md',grilling:'https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md',docs:'https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md',license:'https://github.com/mattpocock/skills/blob/main/LICENSE',format:'https://agentskills.io/home',cli:'https://github.com/vercel-labs/skills',practice:'https://agentskills.io/skill-creation/best-practices'};
function text(s,str,x,y,w,h,size=28,color=C.ink,bold=false,extra={}){
 const webText={kind:'text',text:str,x,y,w,h,size,color,bold,font:extra.typeface||font,lineSpacing:extra.lineSpacing||1.2};
 webSlides.at(-1).elements.push(webText);
 const a=s.shapes.add({geometry:'textbox',name:str.slice(0,40),position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
 a.text=str;
 a.text.style={typeface:font,fontSize:size,color,bold,autoFit:'none',verticalAlignment:'top',wrap:'none',insets:{top:0,bottom:0,left:0,right:0},...extra};
 webTexts.set(a,webText);
 return a;
}
function link(s,label,url,x,y,w,size=22,color=C.blue){const a=text(s,label,x,y,w,42,size,color);a.text.get(label).link={uri:url,isExternal:true};webTexts.get(a).url=url;return a;}
function slide(title,dark=false){
 const s=p.slides.add();s.background.fill=dark?C.dark:C.bg;webSlides.push({background:dark?C.dark:C.bg,elements:[],notes:''});
 if(title)text(s,title,64,47,1152,77,46,dark?C.white:C.ink,true);
 text(s,String(p.slides.items.length).padStart(2,'0'),1180,673,36,24,16,dark?'#A6B7C8':C.sub);
 return s;
}
function notes(s,str,urls=[]){webSlides.at(-1).notes=str+'\n\n出典\n'+urls.join('\n');s.speakerNotes.textFrame.setText(str+'\n\n出典\n'+urls.join('\n'));}

// 1. Minimal title.
{
 const s=slide('',true);
 text(s,'社内LT',72,63,300,40,22,C.teal);
 text(s,'公開されている',72,175,1136,97,64,C.white,true);
 text(s,'Agent Skillsを使ってみる',72,286,1136,112,74,C.white,true);
 text(s,'grill-meの紹介',77,490,1110,55,30,C.teal);
 notes(s,'公開されているAgent Skillsの使い方と、設計相談を質問から始めるgrill-meを紹介します。',[sources.repo]);
}

// 2. The maintenance cost of custom instructions.
{
 const s=slide('Skills、自分で作り込んでいませんか？');
 text(s,'モデルが変わったら、指示も見直す',67,205,1135,55,34,C.ink,true);
 text(s,'以前のモデル向けに足した手順が、\n更新後も必要とは限らない。',67,276,1135,104,29,C.sub,false,{lineSpacing:1.4});
 text(s,'作ったあとも、動作確認と修正が続く',67,431,1135,55,34,C.ink,true);
 text(s,'指示を足すたびに、別のタスクでも使えるか確かめる。',67,503,1135,49,29,C.sub);
 text(s,'自作する前に、公開Skillsも探してみる。',67,623,1135,48,30,C.blue,true);
 notes(s,'自作したSkillには、実際のタスクでの動作確認と修正が必要です。Agent Skillsのベストプラクティスは、指示を入れなくてもモデルが実行できるなら、その指示を削ることを勧めています。モデル更新後も以前の手順が必要とは限らない、という部分はその考え方を踏まえた運用上の見立てであり、必ず陳腐化するという意味ではありません。公開Skillも中身の確認と手元での動作確認は必要です。',[sources.practice]);
}

// 3. Explain how to use publicly available Skills.
{
 const s=slide('公開されているSkillsも使える');
 text(s,'GitHubなどで公開されているSkillを\nClaude Codeなどに追加して使える。',67,216,564,126,30,C.ink,true,{lineSpacing:1.45});
 text(s,'手順を一から書かずに、\n公開されているものを試せる。',67,413,558,118,29,C.ink,false,{lineSpacing:1.5});
 const bytes=await fs.readFile(path.join(deckDir,'public/mattpocock-skills.jpg'));
 s.images.add({blob:bytes,contentType:'image/jpeg',alt:'GitHubで公開されているSkillsのリポジトリ。',position:{left:668,top:184,width:548,height:376},fit:'contain'});
 webSlides.at(-1).elements.push({kind:'image',src:'/mattpocock-skills.jpg',x:668,y:184,w:548,h:376,alt:'GitHubで公開されているSkillsのリポジトリ。'});
 text(s,'追加前に内容を確認し、手元のタスクで試す。',67,606,1135,40,23,C.sub);
 link(s,'公開例：Matt Pocock / mattpocock/skills（MITライセンス）',sources.repo,67,655,1100,18,C.sub);
 notes(s,'公開されているSkillは、対応するツールに追加して利用できます。ここではGitHub上のmattpocock/skillsを例に紹介しています。追加前に内容を確認し、手元のタスクで動作を確かめます。公開されているため確認や保守が不要という意味ではありません。画像は2026-09-26に取得した公開ページです。',[sources.repo,sources.cli,sources.license]);
}

// 4. Focus on grill-me and the related documentation variant.
{
 const s=slide('grill-me');
 text(s,'質問に答えながら、曖昧な点や\n抜けている条件を確認する。',67,205,1135,148,38,C.ink,true,{lineSpacing:1.45});
 text(s,'文書にも残したいときは grill-with-docs',67,462,1135,53,32,C.blue,true);
 text(s,'質問に加えて、用語や設計判断も文書に残す。',67,538,1135,50,29,C.sub);
 link(s,'出典：Matt Pocock / mattpocock/skills（MITライセンス）',sources.repo,67,655,1100,18,C.sub);
 notes(s,'grill-meは計画や案について質問するSkillです。grill-with-docsは質問に加えて、用語集や設計判断の記録を作成・更新するSkillです。ここでは違いだけを紹介し、以降の会話例とデモではgrill-meを使います。公開元のMITライセンスは利用・改変・再配布を認めます。配布時には著作権表示とライセンス文を残します。',[sources.repo,sources.grill,sources.docs,sources.license]);
}

// 4. Actual install recipe, dark flat composition.
{
 const s=slide('grill-me の追加と呼び出し',true);
 text(s,'例：Claude Code（コマンドはBash / zsh）',67,134,1100,39,22,C.teal);
 text(s,'1   作業フォルダーで追加する',67,201,1100,43,27,C.white,true);
 text(s,'npx skills@latest add mattpocock/skills \\\n  --skill grill-me grilling --agent claude-code',96,264,1115,91,26,C.teal,false,{typeface:mono,lineSpacing:1.35});
 text(s,'2   Claude Codeのチャットで呼び出す',67,392,1100,44,27,C.white,true);
 text(s,'/grill-me',96,459,1080,45,33,C.teal,true,{typeface:mono});
 text(s,'Azure Functionsで社内向けAPIを作りたいです。\n方式設計Agentに渡す前に、認証と公開範囲を詰めたいです。',96,511,1090,106,28,C.white,false,{lineSpacing:1.35});
 text(s,'Node.js / npm が必要です。grilling は grill-me が内部で使うSkillです。',67,645,1125,28,17,'#BAC9D7');
 notes(s,'grill-meは現在、grillingを呼び出す短いSkillです。この例では両方をClaude Codeに追加します。コマンドは作業プロジェクト内にSkillファイル等を追加します。導入前にSkillの内容と社内の利用ルールを確認してください。改行に使うバックスラッシュはBash / zshの記法です。PowerShell等では2行を1行につなげて実行できます。呼び出し表記はクライアントによって異なります。今回はgrill-me/grillingの利用に絞っています。',[sources.repo,sources.grill,sources.grilling,sources.cli]);
}

// 5. First round, explicitly an illustrative dialogue.
{
 const s=slide('grill-me の会話例');
 text(s,'質問に推奨案も付くので、回答を考えやすい。',67,137,1140,44,28,C.sub);
 text(s,'AI',67,225,80,44,24,C.blue,true);
 text(s,'誰がAPIを呼び出しますか？',161,216,1035,49,33,C.ink,true);
 text(s,'推奨案：まずは社内システム専用に絞る。',161,274,1035,43,26,C.sub);
 text(s,'インターネットからのアクセスは必要ですか？',161,360,1040,49,33,C.ink,true);
 text(s,'推奨案：社内ネットワークからの利用に限定する。',161,418,1035,43,26,C.sub);
 text(s,'自分',67,535,85,44,24,C.blue,true);
 text(s,'社内バッチから呼びます。\n社外からのアクセスは不要です。',161,525,1035,103,32,C.blue,false,{lineSpacing:1.3});
 text(s,'説明用の会話例。実際の質問・推奨案・順序は変わります。',67,663,1040,27,17,C.sub);
 notes(s,'説明用に作成した会話例です。実行ログではありません。grillingは、前提が決まっていて今答えられる質問をまとめ、各質問に推奨案を付ける指示です。回答に依存する質問は次の回に回します。ここでは方式設計Agentに渡す前の要件詰めに使っています。',[sources.grill,sources.grilling,sources.repo]);
}

// 6. Next round uses the previous answers.
{
 const s=slide('回答に合わせて、質問が続く');
 text(s,'「社内バッチから呼ぶ」と分かったので、次を確認。',67,137,1145,44,28,C.sub);
 text(s,'AI',67,225,80,44,24,C.blue,true);
 text(s,'バッチはどこで動いていますか？',161,216,1040,49,33,C.ink,true);
 text(s,'推奨案：既存の実行環境をそのまま使う。',161,274,1035,43,26,C.sub);
 text(s,'APIの認証方式に指定はありますか？',161,357,1040,49,33,C.ink,true);
 text(s,'推奨案：既存のID基盤に合わせる。',161,415,1035,43,26,C.sub);
 text(s,'自分',67,524,85,44,24,C.blue,true);
 text(s,'バッチはオンプレです。Azureへの閉域接続はあります。\n認証はEntra IDのアプリ認証に統一します。',161,516,1045,113,28,C.blue,false,{lineSpacing:1.4});
 text(s,'説明用の会話例（前ページの続き）。',67,663,1085,27,17,C.sub);
 notes(s,'前ページから続く説明用の会話例です。接続や認証の前提は架空の設定であり、利用者の本番システムを断定したものではありません。grillingの公開指示には、共通理解に至ったとユーザーが確認するまで作業を進めない、とあります。この時点ですべてのAPI要件が決まったわけではありません。',[sources.grilling]);
}

// 7. Editable outcome table, not an image.
{
 const s=slide('質問で詰めた要件を、方式設計Agentへ');
 const rows=[['確認したこと','この例での回答'],['呼び出し元','社内バッチ（オンプレ）'],['公開範囲','社内のみ'],['ネットワーク','既存の閉域接続を使う'],['認証','Entra IDのアプリ認証']];
 webSlides.at(-1).elements.push({kind:'table',x:65,y:191,w:731,h:356,widths:[207,524],rows});
 const tb=s.tables.add({rows:5,columns:2,left:65,top:191,width:731,height:356,columnWidths:[207,524],values:rows});
 tb.styleOptions={headerRow:false,bandedRows:false};
 tb.borders.assign({fill:C.line,width:1,style:'solid'});
 for(let r=0;r<5;r++)for(let c=0;c<2;c++){
  const cell=tb.getCell(r,c);cell.fill=r===0?C.dark:C.white;
  cell.text.style={typeface:font,fontSize:r===0?23:25,color:r===0?C.white:C.ink,bold:r===0||c===0,autoFit:'none',verticalAlignment:'middle',insets:{left:20,right:18,top:13,bottom:10}};
 }
 text(s,'回答をまとめて渡す',842,204,378,82,29,C.blue,true);
 text(s,'呼び出し元や接続・認証の\n条件を添えて、方式案の\n作成を依頼する。',842,300,370,141,25,C.ink,false,{lineSpacing:1.45});
 text(s,'分からない条件は、\n未確認と明記する。',842,470,370,99,25,C.ink,false,{lineSpacing:1.4});
 text(s,'この例では未確認：APIの処理内容、呼び出し量、可用性など。',67,625,1130,39,22,C.sub);
 notes(s,'会話例で決めた前提だけを整理しています。grill-meが必ずこの表を出力するという仕様ではありません。表への整理を求めたい場合は、会話の最後に依頼します。方式設計Agentを動かす前に、決まった条件と未確認の点を整理して渡す使い方です。方式設計Agentという呼称は業務上の想定です。質問に答えただけで全要件がそろったという意味ではありません。',[sources.grilling]);
}

// 9. A transition only; the presenter performs the live demo.
{
 const s=slide('',true);
 text(s,'デモをやってみます',72,229,1136,101,70,C.white,true);
 text(s,'今日の晩ご飯を grill-me で考える',77,389,1120,67,39,C.teal);
 notes(s,'ここで実際の操作画面に切り替えます。お題は今日の晩ご飯です。');
}

// 10. Practical way to bound the conversation.
{
 const s=slide('質問が広がりすぎたとき');
 text(s,'「今回は認証と公開範囲だけ決めたいです」',67,192,1140,58,35,C.blue,true);
 text(s,'何を決めたいか、範囲を指定する。',84,268,1100,46,27,C.sub);
 text(s,'「性能はまだ分かりません。\n　検証項目にしてください」',67,365,1140,106,35,C.ink,true,{lineSpacing:1.35});
 text(s,'分からないことまで、その場で決めなくてよい。',84,491,1100,46,27,C.sub);
 text(s,'推奨案も確認は必要。製品仕様の調査や性能の実測は、別に行います。',67,620,1130,44,24,C.sub);
 notes(s,'質問の範囲をユーザーの明示指示で狭めたり、判断に必要な情報がなければ保留して調査や検証へ切り替える、という使い方の提案です。grillingの原文はすべての分岐を解決するまで質問するという強い指示のため、LTではこの調整方法も示しています。質問の回数削減や過剰設計防止を確約していません。',[sources.grilling]);
}

// 11. Links to the two Skills introduced in the deck.
{
 const s=slide('参考資料');
 text(s,'公開Skillsの一覧と追加方法',67,179,1110,53,31,C.ink,true);
 link(s,'github.com/mattpocock/skills',sources.repo,67,242,1120,29);
 text(s,'質問に答えて、案や要件を詰める',67,348,1110,49,28,C.ink,true);
 link(s,'grill-me / SKILL.md',sources.grill,67,408,1120,29);
 text(s,'用語や設計判断も文書に残す',67,514,1110,49,28,C.ink,true);
 link(s,'grill-with-docs / SKILL.md',sources.docs,67,574,1120,29);
 text(s,'公開元：Matt Pocock / mattpocock/skills（MIT）。公開内容は更新されることがあります。',67,655,1110,28,18,C.sub);
 notes(s,'今回紹介した公開Skillsの一覧、追加方法、2つのSkillの定義へのリンクです。Skillの内容や導入方法は更新されることがあります。',[sources.repo,sources.grill,sources.docs,sources.license]);
}

await fs.mkdir(path.join(revision,'preview'),{recursive:true});
await fs.mkdir(output,{recursive:true});
await fs.mkdir(path.join(revision,'validated'),{recursive:true});
await fs.writeFile(path.join(revision,'presentation.json'),JSON.stringify(p.toProto()));
const candidate=path.join(revision,'candidate.pptx');
await (await PresentationFile.exportPptx(p)).save(candidate);
await finalizePresentation({workspaceDir:root,candidatePath:candidate,finalPath:path.join(revision,'validated/agent-skills-lt.pptx'),pythonExecutable:process.env.CODEX_PRIMARY_RUNTIME_PYTHON,integrityValidatorPath:path.join(SKILL,'container_tools/inspect_presentation_package_integrity.py'),layoutValidatorPath:path.join(SKILL,'container_tools/inspect_presentation_layout_geometry.py'),layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit','--require-native-table-slide','8'],requiredNativeTableOwnerSlides:[8],fontPolicy:{basis:'design',families:[font,mono]},verifyArtifactToolImport:true,receiptPath:path.join(revision,'validation-revised.json')});
await exportSlidev(deckDir,webSlides);
await fs.copyFile(path.join(revision,'validated/agent-skills-lt.pptx'),path.join(output,'agent-skills-lt.pptx'));
const soffice=process.env.SOFFICE_BIN || path.join(process.env.CODEX_PRIMARY_RUNTIME_ROOT,'dependencies/bin/override/soffice');
execFileSync(soffice,['-env:UserInstallation='+pathToFileURL(path.join(revision,'lo-profile')).href,'--headless','--convert-to','pdf','--outdir',revision,path.join(output,'agent-skills-lt.pptx')],{stdio:'inherit'});
await fs.copyFile(path.join(revision,'agent-skills-lt.pdf'),path.join(output,'agent-skills-lt.pdf'));
for(let i=0;i<p.slides.items.length;i++){
 const s=p.slides.items[i];
 const png=await p.export({slide:s,format:'png',scale:1.5});
 await fs.writeFile(path.join(revision,'preview',`slide-${i+1}.png`),new Uint8Array(await png.arrayBuffer()));
}
console.log('Created '+p.slides.items.length+' slides. Validation and previews: '+revision);
