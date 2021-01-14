(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return l}));var n=a(3),i=a(7),c=(a(0),a(155)),r={id:"api-context-data",title:"Context data"},o={unversionedId:"api-context-data",id:"api-context-data",isDocsHomePage:!1,title:"Context data",description:"Some components might need to know a current form state, which is passed as React context.",source:"@site/../docs/api-context-data.md",slug:"/api-context-data",permalink:"/docs/api-context-data",version:"current",sidebar:"docs",previous:{title:"Bridges",permalink:"/docs/api-bridges"},next:{title:"Helpers",permalink:"/docs/api-helpers"}},b=[{value:"Accessing context data",id:"accessing-context-data",children:[]},{value:"Available context data",id:"available-context-data",children:[{value:"<code>changed</code>",id:"changed",children:[]},{value:"<code>changedMap</code>",id:"changedmap",children:[]},{value:"<code>error</code>",id:"error",children:[]},{value:"<code>model</code>",id:"model",children:[]},{value:"<code>name</code>",id:"name",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>onSubmit</code>",id:"onsubmit",children:[]},{value:"<code>randomId</code>",id:"randomid",children:[]},{value:"<code>schema</code>",id:"schema",children:[]},{value:"<code>state</code>",id:"state",children:[]},{value:"<code>submitting</code>",id:"submitting",children:[]},{value:"<code>validating</code>",id:"validating",children:[]}]}],d={rightToc:b};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Some components might need to know a current form state, which is passed as ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),"React context"),".\nProperties stored in the context relates either to the form values or the form instance itself.\nThat means, besides current form state, you can access form methods or encounter some metadata, e.g. about the used schema.\nSome of them were designed for internal use, but you can still take advantage of them."),Object(c.b)("h2",{id:"accessing-context-data"},"Accessing context data"),Object(c.b)("p",null,"A convenient way to access context is to use the ",Object(c.b)("inlineCode",{parentName:"p"},"useForm")," hook:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { useForm } from 'uniforms';\n\nfunction MyComponent() {\n  const uniforms = useForm();\n}\n")),Object(c.b)("p",null,"If you want to access only field-relevant part, use ",Object(c.b)("inlineCode",{parentName:"p"},"useField(name, props)")," hook, where ",Object(c.b)("inlineCode",{parentName:"p"},"name")," is the target field name and ",Object(c.b)("inlineCode",{parentName:"p"},"props")," are the props of it:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { useField } from 'uniforms';\n\nfunction MyCustomField(rawProps) {\n  const [props, uniforms] = useField(rawProps.name, rawProps);\n}\n")),Object(c.b)("p",null,"Using ",Object(c.b)("inlineCode",{parentName:"p"},"useField")," allows you to create components that combine values of multiple fields:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { useField } from 'uniforms';\n\nfunction ArePasswordsEqual() {\n  const [{ value: passwordA }] = useField('passwordA', {});\n  const [{ value: passwordB }] = useField('passwordB', {});\n  const areEqual = passwordA === passwordB;\n  return <div>{`Passwords are ${areEqual ? 'equal' : 'not equal'}`}</div>;\n}\n")),Object(c.b)("p",null,"Additionally, ",Object(c.b)("inlineCode",{parentName:"p"},"useField")," accept third, optional parameter: ",Object(c.b)("inlineCode",{parentName:"p"},"options"),":"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Option"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"absoluteName")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Whether the field name should be treated as a top-level one, ignoring parent fields.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"initialValue")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"true")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Initial value check. If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", then after the first render the default value is set as value if no value is provided (",Object(c.b)("inlineCode",{parentName:"td"},"undefined"),").")))),Object(c.b)("h2",{id:"available-context-data"},"Available context data"),Object(c.b)("h3",{id:"changed"},Object(c.b)("inlineCode",{parentName:"h3"},"changed")),Object(c.b)("p",null,"Indicates whether there was a change on form."),Object(c.b)("h3",{id:"changedmap"},Object(c.b)("inlineCode",{parentName:"h3"},"changedMap")),Object(c.b)("p",null,"A map of changed fields. Rather internal one, used for checking if ",Object(c.b)("em",{parentName:"p"},"other")," fields has changed."),Object(c.b)("h3",{id:"error"},Object(c.b)("inlineCode",{parentName:"h3"},"error")),Object(c.b)("p",null,"An object with a ",Object(c.b)("inlineCode",{parentName:"p"},"details")," field, which is an array of any validation errors."),Object(c.b)("h3",{id:"model"},Object(c.b)("inlineCode",{parentName:"h3"},"model")),Object(c.b)("p",null,"An object with current form fields values structured ",Object(c.b)("inlineCode",{parentName:"p"},"{field: value}"),"."),Object(c.b)("h3",{id:"name"},Object(c.b)("inlineCode",{parentName:"h3"},"name")),Object(c.b)("p",null,"It is an array of the parent fields names:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"<Field name=\"x\">\n  // name = []\n  <Field name=\"y.z\">\n    // name = ['x']\n    <Field name=\"a\" /> // name = ['x', 'y', 'z']\n  </Field>\n</Field>\n")),Object(c.b)("p",null,"For example if we define a ",Object(c.b)("inlineCode",{parentName:"p"},"CompositeField"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const Composite = () => (\n  <section>\n    <AutoField name="firstName" />\n    <AutoField name="lastName" />\n  </section>\n);\n')),Object(c.b)("p",null,"And use it like that:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'<AutoForm schema={schema}>\n  <CompositeField name="personA" />\n  <SubmitField />\n</AutoForm>\n')),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"name")," array of the nested ",Object(c.b)("inlineCode",{parentName:"p"},"AutoFields")," will store a ",Object(c.b)("inlineCode",{parentName:"p"},"personA")," value."),Object(c.b)("h3",{id:"onchange"},Object(c.b)("inlineCode",{parentName:"h3"},"onChange")),Object(c.b)("p",null,"You can directly access to the ",Object(c.b)("inlineCode",{parentName:"p"},"onChange")," method. E.g. ",Object(c.b)("inlineCode",{parentName:"p"},"onChange(field, value)"),"."),Object(c.b)("h3",{id:"onsubmit"},Object(c.b)("inlineCode",{parentName:"h3"},"onSubmit")),Object(c.b)("p",null,"Access to ",Object(c.b)("inlineCode",{parentName:"p"},"onSubmit")," method."),Object(c.b)("h3",{id:"randomid"},Object(c.b)("inlineCode",{parentName:"h3"},"randomId")),Object(c.b)("p",null,"Access to ",Object(c.b)("inlineCode",{parentName:"p"},"randomId")," method. Similar to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-helpers#randomidsprefix"}),"randomIds()"),"."),Object(c.b)("h3",{id:"schema"},Object(c.b)("inlineCode",{parentName:"h3"},"schema")),Object(c.b)("p",null,"A bridge class instance with ",Object(c.b)("inlineCode",{parentName:"p"},"schema")," and ",Object(c.b)("inlineCode",{parentName:"p"},"validator")," properties."),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"schema")," is simply your schema object and ",Object(c.b)("inlineCode",{parentName:"p"},"validator")," is your validating function."),Object(c.b)("h3",{id:"state"},Object(c.b)("inlineCode",{parentName:"h3"},"state")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"state")," is an object representing your current form status."),Object(c.b)("p",null,"The state properties are:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"disabled")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Indicates whether the form is disabled.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"label")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Indicates whether the labels should be shown.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"placeholder")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Indicates whether the placeholders should be shown.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"showInlineError")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Indicates whether the inline errors should be shown.")))),Object(c.b)("h3",{id:"submitting"},Object(c.b)("inlineCode",{parentName:"h3"},"submitting")),Object(c.b)("p",null,"Indicates whether the form is in the ",Object(c.b)("inlineCode",{parentName:"p"},"submitting")," state. Helpful when handling asynchronous submission."),Object(c.b)("h3",{id:"validating"},Object(c.b)("inlineCode",{parentName:"h3"},"validating")),Object(c.b)("p",null,"Indicates whether the form is in the ",Object(c.b)("inlineCode",{parentName:"p"},"validating")," state. Helpful when handling asynchronous validation."))}l.isMDXComponent=!0}}]);