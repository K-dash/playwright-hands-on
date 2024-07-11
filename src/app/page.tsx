import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "最初のページ",
  description: "Playwrightハンズオンの最初のステップ",
};

export default function Home() {
  return (
    <main>
      <h1>Playwrightのハンズオン</h1>
      <p>あなたは1週間後にはPlaywrightのエキスパートです</p>
      <p>
        <button>操作゙ボタン</button>
      </p>
    </main>
  );
}
