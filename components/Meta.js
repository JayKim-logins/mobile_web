import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
      <script src='../AUIGrid/AUIGrid.js' async="async" ></script>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'title',
  keywords: 'trade, mobile',
  description: 'tradeverse mobile',
}

export default Meta