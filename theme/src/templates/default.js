import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'

/*
  Query here allows for shadowing components
*/
export const query = graphql`
query ($slug: String!) {
  file(fields: {slug: {eq: $slug}}) {
    childMdx {
      body
    }
  }
}
`

const Default = (props) => {
  const { data } = props
  const pageData = {
    body: data.file.childMdx.body,
  }
  return (
    <>
      <Page {...pageData} />
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Default