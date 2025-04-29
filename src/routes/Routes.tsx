import { lazy } from "react";

const Index1 = lazy(() => import("../pages/index-1/"));
const Index2 = lazy(() => import("../pages/index-2/"));
const Index3 = lazy(() => import("../pages/index-3/"));
const Index4 = lazy(() => import("../pages/index-4/"));

const About = lazy(() => import("../pages/about"));
const Contact = lazy(() => import("../pages/contact"));

const Blog = lazy(() => import("../pages/blog"));
const BlogLeft = lazy(() => import("../pages/blog/left"));
const BlogRight = lazy(() => import("../pages/blog/right"));
const BlogSingle = lazy(() => import("../pages/blog/single"));

const ErrorPage = lazy(() => import("../pages/other-pages/404"));
const Faq = lazy(() => import("../pages/other-pages/faq"));
const Pricing = lazy(() => import("../pages/other-pages/pricing"));
const Team = lazy(() => import("../pages/other-pages/team"));
const Testimonial = lazy(() => import("../pages/other-pages/testimonial"));

const ProjectLeft = lazy(() => import("../pages/projects/left"));
const ProjectRight = lazy(() => import("../pages/projects/right"));
const ProjectSingle = lazy(() => import("../pages/projects/single"));
const Project = lazy(() => import("../pages/projects"));

const Services = lazy(() => import("../pages/services"));
const ServicesLeft = lazy(() => import("../pages/services/left"));
const ServiceRight = lazy(() => import("../pages/services/right"));
const ServiceSingle = lazy(() => import("../pages/services/single"));

export const landingRoutes = [
    { path: "/", name: "index1", element: <Index1 /> },
    { path: "/index-2", name: "index2", element: <Index2 /> },
    { path: "/index-3", name: "index3", element: <Index3 /> },
    { path: "/index-4", name: "index4", element: <Index4 /> },
];

export const pageRoutes = [
    { path: "/about", name: "about", element: <About /> },
    { path: "/contact", name: "contact", element: <Contact /> },
    { path: "/blog", name: "blog", element: <Blog /> },
    { path: "/blog/left", name: "blog-left", element: <BlogLeft /> },
    { path: "/blog/right", name: "blog-right", element: <BlogRight /> },
    { path: "/blog/single", name: "blog-single", element: <BlogSingle /> },
    { path: "pages/404", name: "404", element: <ErrorPage /> },
    { path: "pages/faq", name: "faq", element: <Faq /> },
    { path: "pages/pricing", name: "pricing", element: <Pricing /> },
    { path: "pages/team", name: "team", element: <Team /> },
    {
        path: "pages/testimonial",
        name: "testimonial",
        element: <Testimonial />,
    },
    { path: "/projects", name: "project", element: <Project /> },
    { path: "/projects/left", name: "project-left", element: <ProjectLeft /> },
    { path: "/projects/right", name: "project-right", element: <ProjectRight /> },
    {
        path: "/projects/single",
        name: "project-single",
        element: <ProjectSingle />,
    },
    { path: "/services", name: "services", element: <Services /> },
    { path: "/services/left", name: "services-left", element: <ServicesLeft /> },
    { path: "/services/right", name: "service-right", element: <ServiceRight /> },
    {
        path: "/services/single",
        name: "service-single",
        element: <ServiceSingle />,
    },
];
