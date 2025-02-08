import styles from "./page.module.css";

type Props = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page(props: Props) {
  const query = (await props.searchParams).query;
  return <div className={styles.component}>query={query}</div>;
}
