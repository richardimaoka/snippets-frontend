import styles from "./Component.module.css";

type Props = {};

export function Component(props: Props) {
  return (
    <div className={styles.component}>
      <div>ニュース・お知らせ</div>
      <div>コラム・特集</div>
      <div>イベント・セミナー</div>
      <div>お客様の声・事例</div>
      <div>マーケティング</div>
      <div>テクノロジー</div>
      <div>ビジネス・経営</div>
      <div>ライフスタイル</div>
      <div>初心者向けガイド</div>
      <div>ハウツー・Tips</div>
      <div>トラブルシューティング</div>
      <div>インタビュー</div>
      <div>Q&A・読者投稿</div>
      <div>おすすめリソース</div>
      <div>トレンド・流行</div>
      <div>ランキング・まとめ</div>
      <div>コラム・エッセイ</div>
    </div>
  );
}
