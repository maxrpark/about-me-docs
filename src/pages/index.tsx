import React, { FC } from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import { HomepageHeader } from "../components/";

const Home: FC = (): JSX.Element => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description='Description will go into a meta tag in <head />'
        >
            <HomepageHeader />
            <main>
                <h2>content</h2>
            </main>
        </Layout>
    );
};

export default Home;
