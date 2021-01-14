(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),b=(a(0),a(155)),c={id:"api-helpers",title:"Helpers"},i={unversionedId:"api-helpers",id:"api-helpers",isDocsHomePage:!1,title:"Helpers",description:"connectField(component[, options])",source:"@site/../docs/api-helpers.md",slug:"/api-helpers",permalink:"/docs/api-helpers",version:"current",sidebar:"docs",previous:{title:"Context data",permalink:"/docs/api-context-data"},next:{title:"Autofield algorithm",permalink:"/docs/uth-autofield-algorithm"}},o=[{value:"<code>connectField(component[, options])</code>",id:"connectfieldcomponent-options",children:[]},{value:"<code>changedKeys(root, valueA, valueB)</code>",id:"changedkeysroot-valuea-valueb",children:[]},{value:"<code>filterDOMProps(props)</code>",id:"filterdompropsprops",children:[]},{value:"<code>filterDOMProps.register(propA, propB, propC ...)</code>",id:"filterdompropsregisterpropa-propb-propc-",children:[]},{value:"<code>filterDOMProps.registered</code>",id:"filterdompropsregistered",children:[]},{value:"<code>joinName([null, ] nameA, nameB, nameC, ...)</code>",id:"joinnamenull--namea-nameb-namec-",children:[]},{value:"<code>randomIds([prefix])</code>",id:"randomidsprefix",children:[]}],p={rightToc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"connectfieldcomponent-options"},Object(b.b)("inlineCode",{parentName:"h2"},"connectField(component[, options])")),Object(b.b)("p",null,"Provides form management related props."),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"connectField")," helper is a component wrapper, that provides various props related to the form management.\nIt also adds the 'Field' suffix to the name of the wrapped component."),Object(b.b)("p",null,"The table below lists all of the ",Object(b.b)("strong",{parentName:"p"},"guaranteed")," props that will be passed to the wrapped component:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"changed")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Has field changed?")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"disabled")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Is field disabled?")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"error")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Field scoped part of validation error.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"errorMessage")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Field scoped validation error message.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"field")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Field definition from schema.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"fields")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"arrayOf(string)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Subfields names.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"fieldType")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"func")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Field type.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"id")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Field id - given or random.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"label")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Field label.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Field name.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"onChange")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"func(value, [name])")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Change field value.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"placeholder")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Field placeholder.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"showInlineError")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Show inline error?")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"any")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Field value.")))),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"connectField")," function accepts two arguments: the first one is a component and the second one is an options object."),Object(b.b)("p",null,"The table below lists all available options:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"initialValue")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Initial value check. If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", then after the first render the default value is set as value if no value is provided (",Object(b.b)("inlineCode",{parentName:"td"},"undefined"),").")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"kind")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"'leaf'")," or ",Object(b.b)("inlineCode",{parentName:"td"},"'node'")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Defines field type. If you are not sure which one to use, use ",Object(b.b)("inlineCode",{parentName:"td"},"node"),".")))),Object(b.b)("h2",{id:"changedkeysroot-valuea-valueb"},Object(b.b)("inlineCode",{parentName:"h2"},"changedKeys(root, valueA, valueB)")),Object(b.b)("p",null,"Returns an array of changed keys between ",Object(b.b)("inlineCode",{parentName:"p"},"valueA")," and ",Object(b.b)("inlineCode",{parentName:"p"},"valueB"),", where ",Object(b.b)("inlineCode",{parentName:"p"},"root")," is the root key."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { changedKeys } from 'uniforms';\n\nconst arrayOfChangedKeys = changedKeys(root, valueA, valueB);\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," For more examples, see ",Object(b.b)("inlineCode",{parentName:"p"},"changedKeys")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vazco/uniforms/blob/master/packages/uniforms/__tests__/changedKeys.ts"}),"tests"),"."),Object(b.b)("h2",{id:"filterdompropsprops"},Object(b.b)("inlineCode",{parentName:"h2"},"filterDOMProps(props)")),Object(b.b)("p",null,"Removes all uniforms-related props."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { filterDOMProps } from 'uniforms';\n\nconst nonUniformsProps = filterDOMProps(props);\n")),Object(b.b)("h2",{id:"filterdompropsregisterpropa-propb-propc-"},Object(b.b)("inlineCode",{parentName:"h2"},"filterDOMProps.register(propA, propB, propC ...)")),Object(b.b)("p",null,"Registers additional props to be filtered."),Object(b.b)("p",null,"If you want to filter additional props, then you have to register it."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { filterDOMProps } from 'uniforms';\n\nfilterDOMProps.register(propA, propB, propC /* ... */);\n")),Object(b.b)("h2",{id:"filterdompropsregistered"},Object(b.b)("inlineCode",{parentName:"h2"},"filterDOMProps.registered")),Object(b.b)("p",null,"Returns an array containing already registered props."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { filterDOMProps } from 'uniforms';\n\nfilterDOMProps.register(propA, propB, propC /* ... */);\nfilterDOMProps.registered; // ['propA', 'propB', ...]\n")),Object(b.b)("h2",{id:"joinnamenull--namea-nameb-namec-"},Object(b.b)("inlineCode",{parentName:"h2"},"joinName([null, ] nameA, nameB, nameC, ...)")),Object(b.b)("p",null,"Safely joins partial field names. When the first param is null, returns an array. Otherwise, returns a string."),Object(b.b)("p",null,"If you create a custom field with subfields, then it's better to use this helper."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { joinName } from 'uniforms';\n\nconst joinedNameArray = joinName(null, nameA, nameB, nameC /* ... */);\nconst joinedNameString = joinName(nameA, nameB, nameC /* ... */);\n")),Object(b.b)("h2",{id:"randomidsprefix"},Object(b.b)("inlineCode",{parentName:"h2"},"randomIds([prefix])")),Object(b.b)("p",null,"Generates random ID, based on given prefix. (",Object(b.b)("em",{parentName:"p"},"It's rather an internal helper, but it's still exported."),")"),Object(b.b)("p",null,"Use it, if you want to have some random but deterministic strings. If no prefix is provided, the 'uniforms' prefix will be applied."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { randomIds } from 'uniforms';\n\nconst predictableRandomIdGenerator = randomIds(prefix);\n\nconst predictableRandomIdA = predictableRandomIdGenerator();\nconst predictableRandomIdB = predictableRandomIdGenerator();\n")))}d.isMDXComponent=!0}}]);