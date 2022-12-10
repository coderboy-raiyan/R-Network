import NotFound from "components/NotFound/NotFound";
import React from "react";
import { useParams } from "react-router-dom";

function generatePage(pageName: string | undefined) {
    const component = () => require(`./pages/${pageName}/${pageName}`).default;
    console.log(`./pages/${pageName}/${pageName}`);
    try {
        return React.createElement(component());
    } catch (error) {
        return <NotFound />;
    }
}

function PageRender() {
    const { page, id } = useParams();

    let pageName;

    if (id) {
        pageName = `${page}/[id]`;
    } else {
        pageName = page;
    }

    return generatePage(pageName);
}

export default PageRender;
