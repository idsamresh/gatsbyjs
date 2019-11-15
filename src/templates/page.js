import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default class PageTemplate extends Component {
    render() {
        const currentPage = this.props.data.wordpressPage;
        // console.log(currentPage);
        return (
            <Layout>
                <SEO title={currentPage.yoast_meta.yoast_wpseo_title} description={currentPage.yoast_meta.yoast_wpseo_metadesc} />
                <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }}></h1>
                <p><strong>ID: {currentPage.id}</strong></p>
                <div dangerouslySetInnerHTML={{ __html: currentPage.content }}></div>
                <Link to="/">Go to home page</Link>
            </Layout>
        )
    }
}
export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: {eq: $id}) {
            title
            content
            slug
            id
            yoast_meta {
                yoast_wpseo_title
                yoast_wpseo_metadesc
            }
            acf {
                page_builder_page {
                    __typename
                    ... on WordPressAcf_hero_banner {
                        id
                        hbanner_title
                    }
                }
            }
        }
    }
`