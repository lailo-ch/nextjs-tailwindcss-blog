import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { loadArticles, Article } from 'utils/articles'
import Layout from 'components/layout/Layout'
import ArticleList from 'components/ArticleList'
import Container from 'components/layout/Container'
import Bio from 'components/Bio'
import { generateRSS } from 'utils/generateRSS'
import { NextSeo } from 'next-seo'

export const getStaticProps: GetStaticProps = async () => {
  const articles = loadArticles()

  if (process.env.GENERATE_RSS) {
    generateRSS(articles)
  }

  return { props: { articles } }
}

interface IndexPageProps {
  articles: Article[]
}

const IndexPage: NextPage<IndexPageProps> = ({ articles }) => (
  <>
    <NextSeo title={process.env.SITE_DESCRIPTION} />
    <Layout subheader={<Bio />}>
      <Container size="small" className="mt-8">
        <ArticleList articles={articles} />
      </Container>
    </Layout>
  </>
)

export default IndexPage