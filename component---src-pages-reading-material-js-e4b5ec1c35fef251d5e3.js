(self.webpackChunkdocbnmu=self.webpackChunkdocbnmu||[]).push([[715],{2566:function(e,t,r){"use strict";r.d(t,{Z:function(){return X}});var n=r(6156),a=r(1253),c=r(5900),o=r.n(c),l=r(7294),i=r(124),s=r(9541),m=r(9220),u=l.createContext({});u.displayName="AccordionContext";var d=u,p=r(5893),f=["bsPrefix","className","children","eventKey"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=l.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.children,i=e.eventKey,u=(0,a.Z)(e,f),y=(0,l.useContext)(d).activeEventKey;return r=(0,s.vE)(r,"accordion-collapse"),(0,p.jsx)(m.Z,b(b({ref:t,in:y===i},u),{},{className:o()(n,r),children:(0,p.jsx)("div",{children:l.Children.only(c)})}))}));E.displayName="AccordionCollapse";var g=E,h=l.createContext({eventKey:""});h.displayName="AccordionItemContext";var v=h,O=["as","bsPrefix","className"];function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=l.forwardRef((function(e,t){var r=e.as,n=void 0===r?"div":r,c=e.bsPrefix,i=e.className,m=(0,a.Z)(e,O);c=(0,s.vE)(c,"accordion-body");var u=(0,l.useContext)(v).eventKey;return(0,p.jsx)(g,{eventKey:u,children:(0,p.jsx)(n,Z(Z({ref:t},m),{},{className:o()(i,c)}))})}));j.displayName="AccordionBody";var D=j,I=["as","bsPrefix","className","onClick"];function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=l.forwardRef((function(e,t){var r=e.as,n=void 0===r?"button":r,c=e.bsPrefix,i=e.className,m=e.onClick,u=(0,a.Z)(e,I);c=(0,s.vE)(c,"accordion-button");var f=(0,l.useContext)(v).eventKey,y=function(e,t){var r=(0,l.useContext)(d),n=r.activeEventKey,a=r.onSelect;return function(r){a&&a(e===n?null:e,r),t&&t(r)}}(f,m),b=(0,l.useContext)(d).activeEventKey;return"button"===n&&(u.type="button"),(0,p.jsx)(n,k(k({ref:t,onClick:y},u),{},{"aria-expanded":f===b,className:o()(i,c,f!==b&&"collapsed")}))}));S.displayName="AccordionButton";var x=S,C=["as","bsPrefix","className","children","onClick"];function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F=l.forwardRef((function(e,t){var r=e.as,n=void 0===r?"h2":r,c=e.bsPrefix,l=e.className,i=e.children,m=e.onClick,u=(0,a.Z)(e,C);return c=(0,s.vE)(c,"accordion-header"),(0,p.jsx)(n,z(z({ref:t},u),{},{className:o()(l,c),children:(0,p.jsx)(x,{onClick:m,children:i})}))}));F.displayName="AccordionHeader";var R=F,M=["as","bsPrefix","className","eventKey"];function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=l.forwardRef((function(e,t){var r=e.as,n=void 0===r?"div":r,c=e.bsPrefix,i=e.className,m=e.eventKey,u=(0,a.Z)(e,M);c=(0,s.vE)(c,"accordion-item");var d=(0,l.useMemo)((function(){return{eventKey:m}}),[m]);return(0,p.jsx)(v.Provider,{value:d,children:(0,p.jsx)(n,T(T({ref:t},u),{},{className:o()(i,c)}))})}));V.displayName="AccordionItem";var A=V,B=["as","activeKey","bsPrefix","className","onSelect","flush"];function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U=l.forwardRef((function(e,t){var r=(0,i.Ch)(e,{activeKey:"onSelect"}),n=r.as,c=void 0===n?"div":n,m=r.activeKey,u=r.bsPrefix,f=r.className,y=r.onSelect,b=r.flush,E=(0,a.Z)(r,B),g=(0,s.vE)(u,"accordion"),h=(0,l.useMemo)((function(){return{activeEventKey:m,onSelect:y}}),[m,y]);return(0,p.jsx)(d.Provider,{value:h,children:(0,p.jsx)(c,L(L({ref:t},E),{},{className:o()(f,g,b&&"".concat(g,"-flush"))}))})}));U.displayName="Accordion";var X=Object.assign(U,{Button:x,Collapse:g,Item:A,Header:R,Body:D})},428:function(e,t,r){"use strict";r.d(t,{Z:function(){return B}});var n,a=r(6156),c=r(1253),o=r(5900),l=r.n(o),i=r(7294),s=r(124),m=r(5655),u=r(9541),d=r(5160),p=r(1714),f=r(9059),y=r(707),b=r(5893),E=["className","children"];function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=(n={},(0,a.Z)(n,d.d0,"show"),(0,a.Z)(n,d.cn,"show"),n),O=i.forwardRef((function(e,t){var r=e.className,n=e.children,a=(0,c.Z)(e,E),o=(0,i.useCallback)((function(e){(0,f.Z)(e),null==a.onEnter||a.onEnter(e)}),[a]);return(0,b.jsx)(y.Z,h(h({ref:t,addEndListener:p.Z},a),{},{onEnter:o,childRef:n.ref,children:function(e,t){return i.cloneElement(n,h(h({},t),{},{className:l()("fade",r,n.props.className,v[e])}))}}))}));O.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},O.displayName="Fade";var P=O,Z=r(5697),j=r.n(Z),D=["className","variant"];function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var w={"aria-label":j().string,onClick:j().func,variant:j().oneOf(["white"])},k=i.forwardRef((function(e,t){var r=e.className,n=e.variant,o=(0,c.Z)(e,D);return(0,b.jsx)("button",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,type:"button",className:l()("btn-close",n&&"btn-close-".concat(n),r)},o))}));k.displayName="CloseButton",k.propTypes=w,k.defaultProps={"aria-label":"Close"};var S=k,x=r(6132),C=r(8870),N=r(6306),z=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"];function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M=(0,x.Z)("h4");M.displayName="DivStyledAsH4";var K=(0,C.Z)("alert-heading",{Component:M}),T=(0,C.Z)("alert-link",{Component:N.Z}),V={show:!0,transition:P,closeLabel:"Close alert"},A=i.forwardRef((function(e,t){var r=(0,s.Ch)(e,{show:"onClose"}),n=r.bsPrefix,a=r.show,o=r.closeLabel,i=r.closeVariant,d=r.className,p=r.children,f=r.variant,y=r.onClose,E=r.dismissible,g=r.transition,h=(0,c.Z)(r,z),v=(0,u.vE)(n,"alert"),O=(0,m.Z)((function(e){y&&y(!1,e)})),Z=!0===g?P:g,j=(0,b.jsxs)("div",R(R({role:"alert"},Z?void 0:h),{},{ref:t,className:l()(d,v,f&&"".concat(v,"-").concat(f),E&&"".concat(v,"-dismissible")),children:[E&&(0,b.jsx)(S,{onClick:O,"aria-label":o,variant:i}),p]}));return Z?(0,b.jsx)(Z,R(R({unmountOnExit:!0},h),{},{ref:void 0,in:a,children:j})):a?j:null}));A.displayName="Alert",A.defaultProps=V;var B=Object.assign(A,{Link:T,Heading:K})},2623:function(e,t,r){"use strict";var n=r(6156),a=r(1253),c=r(5900),o=r.n(c),l=r(7294),i=r(9541),s=r(5893),m=["bsPrefix","bg","pill","text","className","as"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=l.forwardRef((function(e,t){var r=e.bsPrefix,n=e.bg,c=e.pill,l=e.text,u=e.className,p=e.as,f=void 0===p?"span":p,y=(0,a.Z)(e,m),b=(0,i.vE)(r,"badge");return(0,s.jsx)(f,d(d({ref:t},y),{},{className:o()(u,b,c&&"rounded-pill",l&&"text-".concat(l),n&&"bg-".concat(n))}))}));p.displayName="Badge",p.defaultProps={pill:!1},t.Z=p},6132:function(e,t,r){"use strict";var n=r(6156),a=r(7294),c=r(5900),o=r.n(c),l=r(5893);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){return a.forwardRef((function(t,r){return(0,l.jsx)("div",s(s({},t),{},{ref:r,className:o()(t.className,e)}))}))}},837:function(e,t,r){"use strict";var n=r(7294),a=r(5444);t.Z=function(){var e=(0,a.useStaticQuery)("3936450070");return n.createElement("p",null,"Last updated: ",e.site.buildTimeZone)}},5795:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(2566),c=r(6594),o=r(2623),l=r(428),i=r(9572),s=r(6179),m=r(837);t.default=function(){return n.createElement(n.Fragment,null,n.createElement(i.Z,{pageInfo:{pageName:"Reading Material"}},n.createElement(s.Z,{title:"Reading Material"}),n.createElement("div",null,n.createElement(a.Z,null,n.createElement(a.Z.Item,{eventKey:"0"},n.createElement(a.Z.Header,null,"Misc."),n.createElement(a.Z.Body,null,n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/misc/Enviromental.Ethics.pdf"},"Enviromental Ethics ",n.createElement(o.Z,{bg:"secondary"},"PDF")),"   ",n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/misc/Enviromental.Ethics.pptx"},"Enviromental Ethics ",n.createElement(o.Z,{bg:"secondary"},"PPTX"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/misc/Poly.Acid.pdf"},"Isopoly & Heteropoly anion"," ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/misc/Core.Paper.MOT.Question.Bank.pdf"},"Core Paper MOT Question Bank"," ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/misc/Core.Paper.X-Ray.Technique.pdf"},"Core Paper X-Ray Technique"," ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/misc/Research.Methodology.Lecture.Note.pdf"},"Research Methodology Lecture Note"," ",n.createElement(o.Z,{bg:"secondary"},"PDF"))))))),n.createElement("br",null),n.createElement("h4",null,"Post Graduate"),n.createElement("div",null,n.createElement(a.Z,null,n.createElement(a.Z.Item,{eventKey:"1"},n.createElement(a.Z.Header,null,"Semester I"),n.createElement(a.Z.Body,null,n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/I/Vilsmeir.Reaction.pdf"},"Vilsmeir reaction ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/I/Gattermann-Koch.Reaction.pdf"},"Gattermann-Koch Reaction ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/I/Diazonium.Coupling.pdf"},"Diazonium Coupling ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/I/Aromatic.Electrophilic.Substitution.pdf"},"Aromatic Electrophilic Substitution"," ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/I/Aromatic.Electrophilic.Substitution-2.pdf"},"Aromatic Electrophilic Substitution II"," ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/I/Microstate.and.Term.Symbol.pdf"},"Microstate & Term symbol ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/I/Orgel.Diagram.pdf"},"Orgel Diagram ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/I/BentsRule.pdf"},"Bents Rule ",n.createElement(o.Z,{bg:"secondary"},"PDF"))))),n.createElement(a.Z.Item,{eventKey:"2"},n.createElement(a.Z.Header,null,"Semester II"),n.createElement(a.Z.Body,null,n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/II/Racah.Parameter.pdf"},"Racah Parameter ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/II/Nephelauxtic effect.pdf"},"Nephelauxtic Effect ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/II/Charge transfer spectra of CCC.pdf"},"Charge transfer spectra of CCC"," ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/II/Selection.Rule.pdf"},"Selection Rule ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/II/Tanabe Sugano Diagram I.pdf"},"Tanabe Sugano Diagram I ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/II/Tanabe Sugano Diagram II.pdf"},"Tanabe Sugano Diagram II ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/II/Calculation of Tanabe Sugano.pdf"},"Calculation of Tanabe Sugano",n.createElement(o.Z,{bg:"secondary"},"PDF"))))),n.createElement(a.Z.Item,{eventKey:"3"},n.createElement(a.Z.Header,null,"Semester III"),n.createElement(a.Z.Body,null,n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/III/UV.Spectroscopy.pdf"},"UV Spectroscopy ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/III/IR.Spectroscopy.pdf"},"IR Spectroscopy ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/III/NMR.Spectroscopy.pdf"},"NMR Spectroscopy ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/III/Mass.Spectroscopy.pdf"},"Mass Spectroscopy ",n.createElement(o.Z,{bg:"secondary"},"PDF"))))),n.createElement(a.Z.Item,{eventKey:"4"},n.createElement(a.Z.Header,null,"Semester IV"),n.createElement(a.Z.Body,null,n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/IV/Terpenoids.pdf"},"Terpenoids ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/IV/Terpenoids-2.pdf"},"Terpenoids II ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/IV/ETR.402.I.pdf"},"Electron Transfer Reaction in Oh Complexes"," ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/IV/Marcus.Hush.Theory.pdf"},"Marcus Hush Theory ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/IV/Supramolecular.Chemistry.pdf"},"Supramolecular Chemistry ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/IV/Metal.Alkoxide.pdf"},"Metal Alkoxide ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/IV/Basic.Concepts.Supramolecular.Chemistry.pdf"},"Basic concepts of Supramolecular Chemistry"," ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/IV/Synthesis.Preparation.and.Properties.of.Metal.Acetylacetonate.Complex.pdf"},"Synthesis, preparation & properties of Metal Acetylacetonate complex ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/IV/Reaction.Mechanism.Oh.Complex.pdf"},"Reaction Mechanism of Oh Complexes"," ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/IV/Photochemistry.pdf"},"Photochemistry ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/IV/Photochemistry-II.pdf"},"Photochemistry II",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/IV/Zinziberene.pdf"},"Zinziberene ",n.createElement(o.Z,{bg:"secondary"},"PDF"))))))),n.createElement("br",null),n.createElement("h4",null,"Ph.D."),n.createElement("div",null,n.createElement(a.Z,null,n.createElement(a.Z.Item,{eventKey:"5"},n.createElement(a.Z.Header,null,"Ph.D. Coursework"),n.createElement(a.Z.Body,null,n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/Ph.D/Research.Hypothesis.pdf"},"Research Hypothesis ",n.createElement(o.Z,{bg:"secondary"},"PDF")),"   ",n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/Ph.D/Research.Hypothesis.pptx"},"Research Hypothesis ",n.createElement(o.Z,{bg:"secondary"},"PPTX"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/IV/Synthesis.Preparation.and.Properties.of.Metal.Acetylacetonate.Complex.pdf"},"Synthesis, preparation & properties of Metal Acetylacetonate complex ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/III/UV.Spectroscopy.pdf"},"UV Spectroscopy ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/III/IR.Spectroscopy.pdf"},"IR Spectroscopy ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/III/NMR.Spectroscopy.pdf"},"NMR Spectroscopy ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/III/Mass.Spectroscopy.pdf"},"Mass Spectroscopy ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/IV/Photochemistry.pdf"},"Photochemistry ",n.createElement(o.Z,{bg:"secondary"},"PDF"))),n.createElement("p",null,n.createElement(c.Z,{variant:"outline-dark",size:"sm",href:"../documents/reading-material/IV/Photochemistry-II.pdf"},"Photochemistry II ",n.createElement(o.Z,{bg:"secondary"},"PDF"))))))),n.createElement("br",null),n.createElement(l.Z,{variant:"dark"},"Download all files"," ",n.createElement(l.Z.Link,{href:"https://docbnmu.github.io/"},"here.")),n.createElement(m.Z,null),n.createElement("hr",null)))}}}]);
//# sourceMappingURL=component---src-pages-reading-material-js-e4b5ec1c35fef251d5e3.js.map