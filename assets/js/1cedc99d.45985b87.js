"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6474],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),g=i,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9088:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),l=["components"],o={title:"File Based Lineage",sidebar_label:"File Based Lineage",slug:"/generated/ingestion/sources/file-based-lineage",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/file-based-lineage.md"},s="File Based Lineage",u={unversionedId:"docs/generated/ingestion/sources/file-based-lineage",id:"docs/generated/ingestion/sources/file-based-lineage",isDocsHomePage:!1,title:"File Based Lineage",description:"Module datahub-lineage-file",source:"@site/genDocs/docs/generated/ingestion/sources/file-based-lineage.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/file-based-lineage",permalink:"/docs/generated/ingestion/sources/file-based-lineage",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/file-based-lineage.md",tags:[],version:"current",frontMatter:{title:"File Based Lineage",sidebar_label:"File Based Lineage",slug:"/generated/ingestion/sources/file-based-lineage",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/file-based-lineage.md"},sidebar:"overviewSidebar",previous:{title:"Feast",permalink:"/docs/generated/ingestion/sources/feast"},next:{title:"File",permalink:"/docs/generated/ingestion/sources/file"}},p=[{value:"Module <code>datahub-lineage-file</code>",id:"module-datahub-lineage-file",children:[{value:"Install the Plugin",id:"install-the-plugin",children:[],level:3},{value:"Quickstart Recipe",id:"quickstart-recipe",children:[],level:3},{value:"Config Details",id:"config-details",children:[],level:3},{value:"Lineage File Format",id:"lineage-file-format",children:[],level:3},{value:"Code Coordinates",id:"code-coordinates",children:[],level:3}],level:2},{value:"Questions",id:"questions",children:[],level:2}],d={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file-based-lineage"},"File Based Lineage"),(0,r.kt)("h2",{id:"module-datahub-lineage-file"},"Module ",(0,r.kt)("inlineCode",{parentName:"h2"},"datahub-lineage-file")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,r.kt)("p",null,"This plugin pulls lineage metadata from a yaml-formatted file. An example of one such file is located in the examples directory ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/bootstrap_data/file_lineage.yml"},"here"),"."),(0,r.kt)("h3",{id:"install-the-plugin"},"Install the Plugin"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-lineage-file")," source works out of the box with ",(0,r.kt)("inlineCode",{parentName:"p"},"acryl-datahub"),"."),(0,r.kt)("h3",{id:"quickstart-recipe"},"Quickstart Recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: datahub-lineage-file\n  config:\n    # Coordinates\n    file: /path/to/file_lineage.yml\n    # Whether we want to query datahub-gms for upstream data\n    preserve_upstream: False\n\nsink:\n# sink configs\n")),(0,r.kt)("h3",{id:"config-details"},"Config Details"),(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"View All Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to lineage file to ingest."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"preserve_upstream"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether we want to query datahub-gms for upstream data. False means it will hard replace upstream data for a given entity. True means it will query the backend for existing upstreams and include it in the ingestion run"),(0,r.kt)("td",{parentName:"tr",align:null},"True"))))),(0,r.kt)("h3",{id:"lineage-file-format"},"Lineage File Format"),(0,r.kt)("p",null,"The lineage source file should be a ",(0,r.kt)("inlineCode",{parentName:"p"},".yml")," file with the following top-level keys:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"version"),": the version of lineage file config the config conforms to. Currently, the only version released\nis ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"lineage"),": the top level key of the lineage file containing a list of ",(0,r.kt)("strong",{parentName:"p"},"EntityNodeConfig")," objects"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"EntityNodeConfig"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"entity"),": ",(0,r.kt)("strong",{parentName:"li"},"EntityConfig")," object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"upstream"),": (optional) list of child ",(0,r.kt)("strong",{parentName:"li"},"EntityNodeConfig")," objects")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"EntityConfig"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," : name of the entity"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type"),": type of the entity (only ",(0,r.kt)("inlineCode",{parentName:"li"},"dataset")," is supported as of now)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"env"),": the environment of this entity. Should match the values in the\ntable ",(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/enums/#fabrictype"},"here")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"platform"),": a valid platform like kafka, snowflake, etc.."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"platform_instance"),": optional string specifying the platform instance of this entity")),(0,r.kt)("p",null,"You can also view an example lineage file checked in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/bootstrap_data/file_lineage.yml"},"here")),(0,r.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.metadata.lineage.LineageFileSource")),(0,r.kt)("li",{parentName:"ul"},"Browse on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/metadata/lineage.py"},"GitHub"))),(0,r.kt)("h2",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring ingestion for File Based Lineage, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}c.isMDXComponent=!0}}]);