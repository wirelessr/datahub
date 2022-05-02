"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4153],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,g=m["".concat(s,".").concat(k)]||m[k]||d[k]||i;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6885:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(4137)),l=["components"],o={title:"Okta",sidebar_label:"Okta",slug:"/generated/ingestion/sources/okta",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/okta.md"},s="Okta",p={unversionedId:"docs/generated/ingestion/sources/okta",id:"docs/generated/ingestion/sources/okta",isDocsHomePage:!1,title:"Okta",description:"Module okta",source:"@site/genDocs/docs/generated/ingestion/sources/okta.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/okta",permalink:"/docs/generated/ingestion/sources/okta",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/okta.md",tags:[],version:"current",frontMatter:{title:"Okta",sidebar_label:"Okta",slug:"/generated/ingestion/sources/okta",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/okta.md"},sidebar:"overviewSidebar",previous:{title:"Nifi",permalink:"/docs/generated/ingestion/sources/nifi"},next:{title:"OpenAPI",permalink:"/docs/generated/ingestion/sources/openapi"}},u=[{value:"Module <code>okta</code>",id:"module-okta",children:[{value:"Important Capabilities",id:"important-capabilities",children:[],level:3},{value:"Extracting DataHub Users",id:"extracting-datahub-users",children:[{value:"Usernames",id:"usernames",children:[],level:4},{value:"Profiles",id:"profiles",children:[],level:4}],level:3},{value:"Extracting DataHub Groups",id:"extracting-datahub-groups",children:[{value:"Group Names",id:"group-names",children:[],level:4},{value:"Profiles",id:"profiles-1",children:[],level:4}],level:3},{value:"Extracting Group Membership",id:"extracting-group-membership",children:[],level:3},{value:"Filtering and Searching",id:"filtering-and-searching",children:[],level:3},{value:"Install the Plugin",id:"install-the-plugin",children:[],level:3},{value:"Quickstart Recipe",id:"quickstart-recipe",children:[],level:3},{value:"Config Details",id:"config-details",children:[],level:3}],level:2},{value:"Compatibility",id:"compatibility",children:[{value:"Code Coordinates",id:"code-coordinates",children:[],level:3}],level:2},{value:"Questions",id:"questions",children:[],level:2}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"okta"},"Okta"),(0,i.kt)("h2",{id:"module-okta"},"Module ",(0,i.kt)("inlineCode",{parentName:"h2"},"okta")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,i.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Capability"),(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Descriptions"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"Optionally enabled via configuration")))),(0,i.kt)("p",null,"This plugin extracts the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users"),(0,i.kt)("li",{parentName:"ul"},"Groups"),(0,i.kt)("li",{parentName:"ul"},"Group Membership")),(0,i.kt)("p",null,"from your Okta instance."),(0,i.kt)("h3",{id:"extracting-datahub-users"},"Extracting DataHub Users"),(0,i.kt)("h4",{id:"usernames"},"Usernames"),(0,i.kt)("p",null,'Usernames serve as unique identifiers for users on DataHub. This connector extracts usernames using the\n"login" field of an ',(0,i.kt)("a",{parentName:"p",href:"https://developer.okta.com/docs/reference/api/users/#profile-object"},"Okta User Profile"),".\nBy default, the 'login' attribute, which contains an email, is parsed to extract the text before the \"@\" and map that to the DataHub username."),(0,i.kt)("p",null,"If this is not how you wish to map to DataHub usernames, you can provide a custom mapping using the configurations options detailed below. Namely, ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_profile_to_username_attr"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_profile_to_username_regex"),"."),(0,i.kt)("h4",{id:"profiles"},"Profiles"),(0,i.kt)("p",null,"This connector also extracts basic user profile information from Okta. The following fields of the Okta User Profile are extracted\nand mapped to the DataHub ",(0,i.kt)("inlineCode",{parentName:"p"},"CorpUserInfo")," aspect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"display name"),(0,i.kt)("li",{parentName:"ul"},"first name"),(0,i.kt)("li",{parentName:"ul"},"last name"),(0,i.kt)("li",{parentName:"ul"},"email"),(0,i.kt)("li",{parentName:"ul"},"title"),(0,i.kt)("li",{parentName:"ul"},"department"),(0,i.kt)("li",{parentName:"ul"},"country code")),(0,i.kt)("h3",{id:"extracting-datahub-groups"},"Extracting DataHub Groups"),(0,i.kt)("h4",{id:"group-names"},"Group Names"),(0,i.kt)("p",null,'Group names serve as unique identifiers for groups on DataHub. This connector extracts group names using the "name" attribute of an Okta Group Profile.\nBy default, a URL-encoded version of the full group name is used as the unique identifier (CorpGroupKey) and the raw "name" attribute is mapped\nas the display name that will appear in DataHub\'s UI.'),(0,i.kt)("p",null,"If this is not how you wish to map to DataHub group names, you can provide a custom mapping using the configurations options detailed below. Namely, ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_profile_to_group_name_attr"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_profile_to_group_name_regex"),"."),(0,i.kt)("h4",{id:"profiles-1"},"Profiles"),(0,i.kt)("p",null,"This connector also extracts basic group information from Okta. The following fields of the Okta Group Profile are extracted and mapped to the\nDataHub ",(0,i.kt)("inlineCode",{parentName:"p"},"CorpGroupInfo")," aspect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"name"),(0,i.kt)("li",{parentName:"ul"},"description")),(0,i.kt)("h3",{id:"extracting-group-membership"},"Extracting Group Membership"),(0,i.kt)("p",null,"This connector additional extracts the edges between Users and Groups that are stored in Okta. It maps them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"GroupMembership")," aspect\nassociated with DataHub users (CorpUsers). Today this has the unfortunate side effect of ",(0,i.kt)("strong",{parentName:"p"},"overwriting")," any Group Membership information that\nwas created outside of the connector. That means if you've used the DataHub REST API to assign users to groups, this information will be overridden\nwhen the Okta source is executed. If you intend to ",(0,i.kt)("em",{parentName:"p"},"always")," pull users, groups, and their relationships from your Identity Provider, then\nthis should not matter."),(0,i.kt)("p",null,"This is a known limitation in our data model that is being tracked by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/issues/3065"},"this ticket"),"."),(0,i.kt)("h3",{id:"filtering-and-searching"},"Filtering and Searching"),(0,i.kt)("p",null,"You can also choose to ingest a subset of users or groups to Datahub by adding flags for filtering or searching. For\nusers, set either the ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_users_filter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_users_search")," flag (only one can be set at a time). For groups, set\neither the ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_groups_filter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_groups_search")," flag. Note that these are not regular expressions. See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration\noptions."),(0,i.kt)("h3",{id:"install-the-plugin"},"Install the Plugin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[okta]`\n")),(0,i.kt)("h3",{id:"quickstart-recipe"},"Quickstart Recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: okta\n  config:\n    # Coordinates\n    okta_domain: "dev-35531955.okta.com"\n\n    # Credentials\n    okta_api_token: "11be4R_M2MzDqXawbTHfKGpKee0kuEOfX1RCQSRx99"\n\nsink:\n  # sink configs\n')),(0,i.kt)("h3",{id:"config-details"},"Config Details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"View All Configuration Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_domain"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The location of your Okta Domain, without a protocol. Can be found in Okta Developer console."),(0,i.kt)("td",{parentName:"tr",align:null},"dev-33231928.okta.com")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_api_token"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"An API token generated for the DataHub application inside your Okta Developer Console."),(0,i.kt)("td",{parentName:"tr",align:null},"00be4R_M2MzDqXawbWgfKGpKee0kuEOfX1RCQSRx00")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ingest_users"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether users should be ingested into DataHub."),(0,i.kt)("td",{parentName:"tr",align:null},"True")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ingest_groups"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether groups should be ingested into DataHub."),(0,i.kt)("td",{parentName:"tr",align:null},"True")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ingest_group_membership"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether group membership should be ingested into DataHub. ingest_groups must be True if this is True."),(0,i.kt)("td",{parentName:"tr",align:null},"True")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_profile_to_username_attr"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Which Okta User Profile attribute to use as input to DataHub username mapping."),(0,i.kt)("td",{parentName:"tr",align:null},"login")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_profile_to_username_regex"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"A regex used to parse the DataHub username from the attribute specified in ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_profile_to_username_attr"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"(",(0,i.kt)("sup",{parentName:"td",id:"fnref-@"},(0,i.kt)("a",{parentName:"sup",href:"#fn-@",className:"footnote-ref"},"@")),"+)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_profile_to_group_name_attr"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Which Okta Group Profile attribute to use as input to DataHub group name mapping."),(0,i.kt)("td",{parentName:"tr",align:null},"name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_profile_to_group_name_regex"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"A regex used to parse the DataHub group name from the attribute specified in ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_profile_to_group_name_attr"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"(.*)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"include_deprovisioned_users"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ingest users in the DEPROVISIONED state from Okta."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"include_suspended_users"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ingest users in the SUSPENDED state from Okta."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"page_size"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of entities requested from Okta's REST APIs in one request."),(0,i.kt)("td",{parentName:"tr",align:null},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"delay_seconds"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Generic dict"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of seconds to wait between calls to Okta's REST APIs. (Okta rate limits). Defaults to 10ms."),(0,i.kt)("td",{parentName:"tr",align:null},"0.01")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_users_filter"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Okta filter expression (not regex) for ingesting users. Only one of ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_users_filter")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_users_search")," can be set. See (",(0,i.kt)("a",{parentName:"td",href:"https://developer.okta.com/docs/reference/api/users/#list-users-with-a-filter"},"https://developer.okta.com/docs/reference/api/users/#list-users-with-a-filter"),") for more info."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_users_search"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Okta search expression (not regex) for ingesting users. Only one of ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_users_filter")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_users_search")," can be set. See (",(0,i.kt)("a",{parentName:"td",href:"https://developer.okta.com/docs/reference/api/users/#list-users-with-search"},"https://developer.okta.com/docs/reference/api/users/#list-users-with-search"),") for more info."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_groups_filter"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Okta filter expression (not regex) for ingesting groups. Only one of ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_groups_filter")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_groups_search")," can be set. See (",(0,i.kt)("a",{parentName:"td",href:"https://developer.okta.com/docs/reference/api/groups/#filters"},"https://developer.okta.com/docs/reference/api/groups/#filters"),") for more info."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_groups_search"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Okta search expression (not regex) for ingesting groups. Only one of ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_groups_filter")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_groups_search")," can be set. See (",(0,i.kt)("a",{parentName:"td",href:"https://developer.okta.com/docs/reference/api/groups/#list-groups-with-search"},"https://developer.okta.com/docs/reference/api/groups/#list-groups-with-search"),") for more info."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mask_group_id"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"True")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mask_user_id"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"True"))))),(0,i.kt)("p",null,"As a prerequisite, you should create a DataHub Application within the Okta Developer Console with full permissions to read your organization's Users and Groups."),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null," Validated against Okta API Versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"2021.07.2")),(0,i.kt)("p",{parentName:"li"},"Validated against load:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"User Count: ",(0,i.kt)("inlineCode",{parentName:"p"},"1000"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Group Count: ",(0,i.kt)("inlineCode",{parentName:"p"},"100"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Group Membership Edges: ",(0,i.kt)("inlineCode",{parentName:"p"},"1000")," (1 per User)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run Time (Wall Clock): ",(0,i.kt)("inlineCode",{parentName:"p"},"2min 7sec")))),(0,i.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Class Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.identity.okta.OktaSource")),(0,i.kt)("li",{parentName:"ul"},"Browse on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/identity/okta.py"},"GitHub"))),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring ingestion for Okta, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}m.isMDXComponent=!0}}]);