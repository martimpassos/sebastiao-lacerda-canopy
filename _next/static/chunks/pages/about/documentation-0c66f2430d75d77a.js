(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[407],{9861:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(6043),i=t(4669),MDXLayout=function(e){var n=e.children;return(0,r.jsx)(i.Z,{content:n,navigation:"about"})};function _createMdxContent(e){var n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",ol:"ol",li:"li",strong:"strong",a:"a",em:"em",h4:"h4"},(0,o.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"Documentation"}),"\n",(0,r.jsx)(n.p,{children:"Canopy IIIF is a Next.js application where production and development builds will follow Next documentation accordingly."}),"\n",(0,r.jsx)(n.h2,{children:"Setup"}),"\n",(0,r.jsx)(n.h3,{children:"Install Dependencies"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,r.jsx)(n.h3,{children:"Running in Development"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,r.jsx)(n.h3,{children:"Building in Production"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,r.jsx)(n.h2,{children:"Getting Started"}),"\n",(0,r.jsxs)(n.p,{children:["Canopy IIIF uses a default configuration ",(0,r.jsx)(n.code,{children:"config/.default/canopy.default.json"})," for demonstration purposes if a custom one is not set. The build process will read from a custom configuration file at config/canopy.json if it exists."]}),"\n",(0,r.jsx)(n.h3,{children:"Custom Configuration"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Find your ",(0,r.jsx)(n.code,{children:"config/"})," directory"]}),"\n",(0,r.jsxs)(n.li,{children:["Copy ",(0,r.jsx)(n.code,{children:"canopy.sample.json"})," to ",(0,r.jsx)(n.code,{children:"canopy.json"})]}),"\n",(0,r.jsxs)(n.li,{children:["Make updates to both the ",(0,r.jsx)(n.strong,{children:"prod"})," and ",(0,r.jsx)(n.strong,{children:"dev"})," configurations"]}),"\n",(0,r.jsxs)(n.li,{children:["Copy ",(0,r.jsx)(n.code,{children:"options.sample.json"})," to ",(0,r.jsx)(n.code,{children:"option.json"})]}),"\n",(0,r.jsxs)(n.li,{children:["Modify ",(0,r.jsx)(n.code,{children:"option.json"})," as needed"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{children:"Example Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Both the prod and dev environments have a configuration. These configurations can match each other; however in some cases, development speed can be aided by targeting a smaller IIIF Collection id as a fixture."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Important:"})," The collection property is required and must be the id of the referenced source IIIF Collection. Collections of Collections are not currently supported."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\r\n  "prod": {\r\n    "label": { "none": ["Hobhouse"] },\r\n    "summary": { "none": ["Manuscripts from the archive of Emily Hobhouse."] },\r\n    "collection": "https://iiif.bodleian.ox.ac.uk/iiif/collection/hobhouse",\r\n    "featured": [\r\n      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/8da97e8c-4e12-457d-aad8-3327b3aec183.json",\r\n      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/2968d5c7-3718-44ef-92ea-ee4cc58cc677.json"\r\n    ],\r\n    "metadata": ["Extent", "Title", "Date Statement", "Language"]\r\n  },\r\n  "dev": {\r\n    "label": { "none": ["Hobhouse"] },\r\n    "summary": { "none": ["Manuscripts from the archive of Emily Hobhouse."] },\r\n    "collection": "https://iiif.bodleian.ox.ac.uk/iiif/collection/hobhouse",\r\n    "featured": [\r\n      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/8da97e8c-4e12-457d-aad8-3327b3aec183.json",\r\n      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/2968d5c7-3718-44ef-92ea-ee4cc58cc677.json"\r\n    ],\r\n    "metadata": ["Extent", "Title", "Date Statement", "Language"]\r\n  }\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{children:"Customization"}),"\n",(0,r.jsx)(n.h3,{children:"Site Title and Description"}),"\n",(0,r.jsxs)(n.p,{children:["The Canopy IIIF site title and description are respectively the ",(0,r.jsx)(n.code,{children:"label"})," and ",(0,r.jsx)(n.code,{children:"summary"})," of the set Collection resource. You can optionally override this by providing a valid Presentation 3.0 ",(0,r.jsx)(n.a,{href:"https://iiif.io/api/presentation/3.0/#label",children:"label"})," and/or ",(0,r.jsx)(n.a,{href:"https://iiif.io/api/presentation/3.0/#summary",children:"summary"})," property."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\r\n  "label": { "none": ["Hobhouse"] },\r\n  "summary": { "none": ["Manuscripts from the archive of Emily Hobhouse."] }\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{children:"Featured Manifests"}),"\n",(0,r.jsx)(n.p,{children:"You can inform Canopy IIIF of featured Manifests by providing an array of ids. These must be within the referenced collection resource and the Manifest URIs must be an exact match. These Manifests will render throughout the interface in featured components."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Warning:"})," In the current pre-release, featured Manifests must have an Image body on the first Canvas."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"featured": [\r\n  "https://iiif.bodleian.ox.ac.uk/iiif/manifest/8da97e8c-4e12-457d-aad8-3327b3aec183.json",\r\n  "https://iiif.bodleian.ox.ac.uk/iiif/manifest/2968d5c7-3718-44ef-92ea-ee4cc58cc677.json"\r\n]\n'})}),"\n",(0,r.jsx)(n.h3,{children:"Metadata and Facets"}),"\n",(0,r.jsx)(n.p,{children:"Curating Metadata allows implementers of Canopy IIIF to select metadata labels that provide use to end users. An optimal case is a label common to all or most manifests with some in diversity of values across those resources. Metadata labels that are curated will be automatically included as featured elements on the homepage, the metadata page, linking from works, and as facets on the search page."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Metadata labels are not yet BCP 47 language code aware; however, aggregation processes will make exact string comparisons regardless of language code."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"metadata": ["Extent", "Title", "Date Statement", "Language"]\n'})}),"\n",(0,r.jsx)(n.h2,{children:"Additional Options"}),"\n",(0,r.jsx)(n.h3,{children:"Locale Preferences"}),"\n",(0,r.jsxs)(n.p,{children:["Canopy IIIF supports locale preferences for user interface language. The default configuration language is English; however, additional languages can be defined. For more information, ",(0,r.jsx)(n.a,{href:"#locale",children:"see Locale"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"locales": [\r\n  {\r\n    "config": "locales/en.json",\r\n    "label": "English",\r\n    "lang": "en"\r\n  }\r\n]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"more than one"})," locale is defined in the ",(0,r.jsx)(n.code,{children:"config/options.json"}),", a select element will render in the header allowing users to toggle the defined languages. In addition, Canopy will attempt to align the language set by the user's browser with the available options. As a fallback, the first locale defined in the array will be set."]}),"\n",(0,r.jsxs)(n.p,{children:["As an example, if a visitor with ",(0,r.jsx)(n.code,{children:"en-US"})," visited a Canopy instance that included both ",(0,r.jsx)(n.code,{children:"no"})," and ",(0,r.jsx)(n.code,{children:"en"})," as language options, the ",(0,r.jsx)(n.code,{children:"en"})," locale configuration would be the default locale. Whereas, if a user visited this same instance with ",(0,r.jsx)(n.code,{children:"fr"})," as their browser language, the default locale would be the ",(0,r.jsx)(n.code,{children:"no"})," configuration."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"locales": [\r\n  {\r\n    "config": "locales/no.json",\r\n    "label": "Norsk",\r\n    "lang": "no"\r\n  },\r\n  {\r\n    "config": "locales/en.json",\r\n    "label": "English",\r\n    "lang": "en"\r\n  }\r\n]\n'})}),"\n",(0,r.jsx)(n.h3,{children:"Search Index"}),"\n",(0,r.jsxs)(n.p,{children:["Search options can be configured in ",(0,r.jsx)(n.code,{children:"config/options.json"}),". By default, the search index is included but can be disabled by setting ",(0,r.jsx)(n.code,{children:"enabled: false"}),". If the search index is enabled, the label property on the manifest is always indexed. The properties of the ",(0,r.jsx)(n.code,{children:"metadata"})," property are also indexed by default, but this can be modified to have these values not be indexed at all by setting ",(0,r.jsx)(n.code,{children:"search.index.metadata.enabled"})," to ",(0,r.jsx)(n.code,{children:"false"}),". Furthermore, all ",(0,r.jsx)(n.code,{children:"metadata"})," values may be indexed OR you may specify only the properties that are specified in ",(0,r.jsx)(n.code,{children:"config/canopy.json"})," by modifying ",(0,r.jsx)(n.code,{children:"search.index.metadata.all"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The only property that can be indexed outside of ",(0,r.jsx)(n.code,{children:"metadata"})," and ",(0,r.jsx)(n.code,{children:"label"})," currently is ",(0,r.jsx)(n.code,{children:"summary"}),". This is configured with ",(0,r.jsx)(n.code,{children:"search.index.summary.enabled"})," ."]}),"\n",(0,r.jsx)(n.h4,{children:"FlexSearch"}),"\n",(0,r.jsxs)(n.p,{children:["Users can customize their ",(0,r.jsx)(n.a,{href:"https://github.com/nextapps-de/flexsearch#options",children:"FlexSearch configuration"})," using ",(0,r.jsx)(n.code,{children:"search.flexSearch"})," to fit around the source Collection and its Manifest ",(0,r.jsx)(n.code,{children:"label"}),", ",(0,r.jsx)(n.code,{children:"metadata"}),", and ",(0,r.jsx)(n.code,{children:"summary"})," properties. Customizations range from defining language-specific options such as ",(0,r.jsx)(n.code,{children:"charset"})," and ",(0,r.jsx)(n.code,{children:"stemmer"}),", as well as scoring options like ",(0,r.jsx)(n.code,{children:"resolution"})," and ",(0,r.jsx)(n.code,{children:"depth"}),"."]}),"\n",(0,r.jsx)(n.h4,{children:"Default Search Configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"search": {\r\n  "enabled": true,\r\n  "flexSearch": {\r\n    "charset": "latin:extra",\r\n    "optimize": true,\r\n    "tokenize": "strict",\r\n    "bidirectional": false,\r\n    "document": {\r\n      "index": [\r\n        {\r\n          "field": "label",\r\n          "tokenize": "full",\r\n          "resolution": 9,\r\n          "depth": 3,\r\n          "bidirectional": true\r\n        },\r\n        {\r\n          "field": "metadata",\r\n          "resolution": 2\r\n        },\r\n        {\r\n          "field": "summary",\r\n          "resolution": 1\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  "index": {\r\n    "metadata": {\r\n      "enabled": true,\r\n      "all": false\r\n     },\r\n    "summary": {\r\n      "enabled": false\r\n     }\r\n  }\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{children:"Theme Mode"}),"\n",(0,r.jsxs)(n.p,{children:["The default theme for users can be set via ",(0,r.jsx)(n.code,{children:"config/options.json"}),". This feature sets the initial theme for users as ",(0,r.jsx)(n.strong,{children:"light"}),", ",(0,r.jsx)(n.strong,{children:"dark"}),", or ",(0,r.jsx)(n.strong,{children:"system"}),". The ",(0,r.jsx)(n.em,{children:"Toggle Theme"})," button can also be enabled or disabled here."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Theme settings are stored in the users local browser storage. Setting the theme will only affect new users to your site. It will not change the default theme for users who have already visited."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"theme": { "defaultTheme": "light", "toggleEnabled": false }\n'})}),"\n",(0,r.jsx)(n.h3,{children:"Maps (navPlace)"}),"\n",(0,r.jsxs)(n.p,{children:["A map route can be enabled to provide geographic discovery of works via ",(0,r.jsx)(n.code,{children:"config/options.json"}),". This feature builds markers off of geographic point features found in ",(0,r.jsx)(n.a,{href:"https://iiif.io/api/extension/navplace/",children:"navPlace"})," properties at the Manifest level. To enable this option, set the option to ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Currently, only ",(0,r.jsx)(n.code,{children:"navPlace"}),' properties found at the Manifest level are displayed. Also, onlyFeatures of type: "Point" are displayed.']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"map": { "enabled": true }\n'})}),"\n",(0,r.jsx)(n.p,{children:"The map's tile layers are also configured here, giving users the ability to choose and customize layers for their project. Additional services, such as MapBox, can be easily integrated following this pattern. Each tile layer defined here will appear as an option in the layer control of the map. The name property defines the text next to the radio button. The url property is the link to the tile layer. Finally, the attribution property defines the text that appears at the bottom of the map in case the tile layer requires any specific attribution on use. The first tile layer in the array will be used as the default map."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"tileLayers": [\r\n  {\r\n    "name": "OpenStreetMap",\r\n    "url": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",\r\n    "attribution": "&copy; OpenStreetMap contributors"\r\n  },\r\n  {\r\n    "name": "OpenTopoMap",\r\n    "url": "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",\r\n    "attribution": "&copy; OpenStreetMap contributors"\r\n  }\r\n]\n'})}),"\n",(0,r.jsx)(n.h2,{children:"Locale"}),"\n",(0,r.jsxs)(n.p,{children:["User interface language strings are set through a locale configuration file located in the ",(0,r.jsx)(n.code,{children:"config/locales"})," directory. Persons customizing a Canopy instance can add new language configurations to support their preferred locales. We welcome all pull requests to add new locales to the Canopy IIIF project."]}),"\n",(0,r.jsx)(n.h3,{children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"English"})," configuration found at ",(0,r.jsx)(n.code,{children:"config/locales/en.json"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\r\n  "footerSourceCollection": "Source Collection",\r\n  "footerToggleTheme": "Toggle Theme",\r\n  "homepageHighlightedWorks": "Highlighted Works",\r\n  "searchButton": "Search",\r\n  "searchResults": "Results",\r\n  "searchFilter": "Filter",\r\n  "searchFilterAny": "Any",\r\n  "searchFilterClear": "Clear All",\r\n  "searchFilterClose": "Close",\r\n  "searchFilterSubmit": "View Results"\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{children:"Contextual Content"}),"\n",(0,r.jsxs)(n.p,{children:["Canopy allows for easy creation of contextual content that supports the automatically generated content at ",(0,r.jsx)(n.code,{children:"/"}),", ",(0,r.jsx)(n.code,{children:"search/"})," and ",(0,r.jsx)(n.code,{children:"works/"}),". For the purpose of easy content generation Canopy utilizes ",(0,r.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX"})," which ",(0,r.jsx)(n.em,{children:'"allows you to use JSX in your markdown content."'})]}),"\n",(0,r.jsx)(n.h3,{children:"Creating a Page"}),"\n",(0,r.jsxs)(n.p,{children:["Individual pages for Canopy IIIF are created with the ",(0,r.jsx)(n.code,{children:"pages/"})," directory. Following Next.js conventions, if you create the page ",(0,r.jsx)(n.code,{children:"pages/contact.mdx"}),", an accessibile path will be created at ",(0,r.jsx)(n.code,{children:"/contact"}),". MDX pages will need a defined layout from ",(0,r.jsx)(n.code,{children:"@components/Layouts/"}),". Addditional JSX components can be imported and integrated between markdown syntax. The final line of your file should be an export which outputs the ",(0,r.jsx)(n.em,{children:"children"})," (content) to the provided layout component."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import Basic from "@components/Layouts/Basic";\r\nimport Button from "@components/Button/Button";\r\n\r\n# Contact\r\n\r\nThank you for your interest.\r\n\r\nFor resource requests, please complete a request form or contact us at [email@example.org](mailto:email@example.org).\r\n\r\n<Button url="https://example.org/requests">Submit Request</Button>\r\n\r\nexport default ({ children }) => <Basic content={children} />;\r\n\r\n;\n'})}),"\n",(0,r.jsx)(n.h2,{children:"Avoiding Conflicts"}),"\n",(0,r.jsx)(n.p,{children:"To avoid potential code conflicts on future release updates, it is advised not to update the following integrated Canopy pages:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"src/pages/\r\n-- api/\r\n-- works/\r\n-- index.tsx\r\n-- map.tsx\r\n-- metadata.tsx\r\n-- search.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Future considerations will be delivered upon for updating content within these pages."]}),"\n",(0,r.jsx)(n.h2,{children:"Deployment"}),"\n",(0,r.jsx)(n.p,{children:"When you are ready to deploy your site, you will need to modify environment variables to reflect how your site is hosted."}),"\n",(0,r.jsx)(n.h3,{children:"Environment Variables"}),"\n",(0,r.jsxs)(n.p,{children:["Edit the ",(0,r.jsx)(n.code,{children:".env"})," file at the root of the working directory to reflect your site's configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"NEXT_PUBLIC_URL"})," variable is used to declare the base URL of your site. This base url is critical to routing of works in Canopy and wiring up canonical links in SEO."]}),"\n",(0,r.jsxs)(n.p,{children:["If you plan to host your site in a subdirectory or subdomain, you will need to set the ",(0,r.jsx)(n.code,{children:"NEXT_PUBLIC_BASE_PATH"}),"to reflect this. For example, if your site is hosted at ",(0,r.jsx)(n.em,{children:"https://example.org/exhibit"}),", you would set the value to ",(0,r.jsx)(n.code,{children:"/canopy"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'NEXT_PUBLIC_URL = "https://canopy-iiif.vercel.app"\r\nNEXT_PUBLIC_BASE_PATH = ""\n'})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(MDXLayout,Object.assign({},e,{children:(0,r.jsx)(_createMdxContent,e)}))}},6043:function(e,n,t){"use strict";t.d(n,{a:function(){return useMDXComponents}});var r=t(9499);t(7294);var o=t(9288),i=t(5893),a=(0,o.zo)("blockquote",{fontWeight:"300",color:"$slate11",padding:"$gr1 0"}),Markdown_Blockquote=function(e){var n=e.children;return(0,i.jsx)(a,{children:n})},s=t(2765),l=(0,o.zo)("div",{position:"relative",button:{position:"absolute",marginTop:"-$gr2",right:"$gr3"}}),c=(0,o.zo)("pre",{backgroundColor:"$indigo3",padding:"$gr3",borderRadius:"5px",lineHeight:"1.382em",overflowX:"scroll",overflowY:"visible",boxShadow:"inset 1px 1px 2px  ".concat(s.Eh.indigoA3),zIndex:"0"}),d=(0,o.zo)("code",{backgroundColor:"$indigo3",padding:"3px $gr1",borderRadius:"5px",fontSize:"$gr3",color:"$indigo11",boxShadow:"1px 1px 1px  ".concat(s.Eh.indigoA6)}),h=t(7087),u=t(5407),p=t(2469),g=t(640),f=t.n(g),x={plain:{color:"var(--colors-indigo12)",fontSize:.9*t(5049).hO,fontFamily:"Menlo, monospace"},styles:[{types:["boolean","string"],style:{color:"var(--colors-indigo10)"}},{types:["operator"],style:{color:"var(--colors-indigo11)"}},{types:["punctuation"],style:{color:"var(--colors-indigo8)"}}]};function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var Code_Code=function(e){var n=e.children,t=e.language;return(0,i.jsx)(h.ZP,_objectSpread(_objectSpread({},h.lG),{},{theme:x,code:n,language:t,children:function(e){var t=e.style,r=e.tokens,o=e.getLineProps,a=e.getTokenProps;return(0,i.jsxs)(l,{children:[(0,i.jsxs)(u.O,{buttonSize:"tiny",buttonType:"primary","aria-label":"Copy Code",onClick:function(){f()(n)},css:{display:"flex",alignItems:"center"},children:["Copy\xa0",(0,i.jsx)(p.TIy,{})]}),(0,i.jsx)(c,{style:t,children:r.map(function(e,n){return(0,i.jsx)("div",_objectSpread(_objectSpread({},o({line:e,key:n})),{},{children:e.map(function(e,t){return(0,i.jsx)("span",_objectSpread({},a({token:e,key:t})),n)})}),n)})})]})}}))},j=t(218),m=t(859);function mdx_components_ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function useMDXComponents(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?mdx_components_ownKeys(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):mdx_components_ownKeys(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({h1:function(e){var n=e.children;return(0,i.jsx)(j.Z,{as:"h1",children:n})},h2:function(e){var n=e.children;return(0,i.jsx)(j.Z,{as:"h2",id:(0,m.getSlug)(n),children:n})},h3:function(e){var n=e.children;return(0,i.jsx)(j.Z,{as:"h3",children:n})},code:function(e){var n=e.children;return(0,i.jsx)(d,{children:n})},blockquote:function(e){var n=e.children;return(0,i.jsx)(Markdown_Blockquote,{children:n})},pre:function(e){var n,t=e.children,r=t.props.children,o=null===(n=t.props.className)||void 0===n?void 0:n.replace("language-","");return(0,i.jsx)(Code_Code,{language:o,children:r.trim()})}},e)}},4669:function(e,n,t){"use strict";var r=t(4165),o=t(7294),i=t(4729),a=t(7843),s=t(5324),l=t(859),c=t(7762),d=t(5893);n.Z=function(e){var n=e.content,t=e.navigation,h=(0,o.useState)(),u=h[0],p=h[1];return(0,o.useEffect)(function(){var e=document.createElement("html");e.innerHTML=(0,c.uS)(n),p(Object.values(e.getElementsByTagName("h2")).map(function(e){var n=e.textContent;return{path:"#".concat((0,l.getSlug)(n)),text:n||""}}))},[n]),(0,d.jsx)(a.Z,{children:(0,d.jsx)(i.Z,{containerType:"wide",children:(0,d.jsxs)(r.vs,{aside:!0,children:[t&&(0,d.jsx)(r.CH,{children:(0,d.jsx)(r.AH,{children:(0,d.jsx)(s.Z,{items:{primary:[{path:"/works",text:"Objetos"},{path:"/metadata",text:"Metadados"},{path:"/map",text:"Mapa"},{path:"/about",text:"Sobre"}],about:[{path:"/about",text:"Sobre"},{path:"/about/documentation",text:"Documenta\xe7\xe3o"},{path:"/about/example",text:"Exemplo de markdown"},{path:"/about/history",text:"Hist\xf3rico do projeto"}]}[t],subNavigation:u,orientation:"vertical"})})}),(0,d.jsx)(r.S4,{children:n})]})})})}},4165:function(e,n,t){"use strict";t.d(n,{AH:function(){return i},CH:function(){return a},S4:function(){return s},vs:function(){return l}});var r=t(5049),o=t(9288),i=(0,o.zo)("div",{position:"fixed",width:"275px",paddingTop:"calc($gr4 + $gr3)",marginTop:"-$gr4",maxHeight:"calc(100% - $gr5 - ".concat(r.J9,"px)"),overflow:"scroll","@xs":{position:"relative",width:"100%",maxHeight:"auto",paddingTop:"0",marginTop:"0"}}),a=(0,o.zo)("aside",{width:"275px","@xs":{position:"relative",width:"100%",marginTop:"0",paddingBottom:"$gr2",borderBottom:"1px solid $slate6"}}),s=(0,o.zo)("div",{flexShrink:1,width:"calc(100% - 275px)","@xs":{width:"100%"}}),l=(0,o.zo)("div",{position:"relative",width:"100%",padding:"$gr4 0",display:"flex",variants:{aside:{true:{"@xs":{flexDirection:"column"}}}},"@md":{padding:"$gr2 0"}})},218:function(e,n,t){"use strict";t.d(n,{Z:function(){return Heading_Heading}}),t(7294);var r=(0,t(9288).zo)("h2",{variants:{isHidden:{true:{position:"absolute",visibility:"hidden"}}},"&[data-level=h1]":{margin:"$gr4 0",fontSize:"$gr8",fontWeight:"400",fontFamily:"$display",letterSpacing:"-0.02em",lineHeight:"1.1","@sm":{fontSize:"$gr7"}},"&[data-level=h2]":{margin:"$gr5 0 $gr4",fontSize:"$gr7",fontWeight:"400",fontFamily:"$display",letterSpacing:"-0.01em","@sm":{fontSize:"$gr5"}},"&[data-level=h3]":{margin:"$gr5 0 $gr3",color:"$slate11",fontSize:"$gr6",fontWeight:"300",fontFamily:"$sans",letterSpacing:"-0.01em","@sm":{fontSize:"$gr4"}},"&[data-level=h4]":{},"&[data-level=h5]":{},"&[data-level=h6]":{}}),o=t(5893),Heading_Heading=function(e){var n=e.as,t=void 0===n?"h2":n,i=e.css,a=e.id,s=e.isHidden,l=e.children;return(0,o.jsx)(r,{as:t,isHidden:void 0!==s&&s,"data-level":t,css:void 0===i?{}:i,id:a,children:(0,o.jsx)(o.Fragment,{children:l})})}},859:function(e,n,t){var r=t(930);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach(function(n){r(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var o=t(3984),i={lower:!0,strict:!0,trim:!0};function getSlug(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.substring(0,n)}(o(e,i),100)}e.exports={getSlug:getSlug,getUniqueSlug:function(e,n){var t,o=getSlug(e),i=(t=n[o])?t+1:1;return{slug:i>1?"".concat(o,"-").concat(i):o,allSlugs:_objectSpread(_objectSpread({},n),{},r({},o,i))}}}},7209:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/documentation",function(){return t(9861)}])}},function(e){e.O(0,[774,412,409,971,118,41,888,179],function(){return e(e.s=7209)}),_N_E=e.O()}]);