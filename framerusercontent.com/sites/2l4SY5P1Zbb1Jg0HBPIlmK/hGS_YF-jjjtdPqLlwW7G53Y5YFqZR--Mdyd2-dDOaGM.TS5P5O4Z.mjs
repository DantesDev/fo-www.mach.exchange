import { a as M } from "./chunk-FULJQVA3.mjs";
import { a as L } from "./chunk-6EVAU3GL.mjs";
import { a as Y, b as q } from "./chunk-DX3U3FYQ.mjs";
import "./chunk-XZV3RH4H.mjs";
import {
  A as fe,
  D as I,
  F as c,
  I as ce,
  J as G,
  K as O,
  M as B,
  N as A,
  P as pe,
  Q as de,
  R as ge,
  T as W,
  W as f,
  Z as he,
  b as s,
  ca as ue,
  d as oe,
  g as u,
  h as se,
  i as le,
  ia as v,
  j as E,
  ja as p,
  k as y,
  l as C,
  la as R,
  ma as o,
  na as xe,
  o as e,
  oa as _,
  p as m,
  r as T,
  s as me,
} from "./chunk-EDRQTDHZ.mjs";
import { d as window, f as a } from "./chunk-LPOYIOKO.mjs";
a();
a();
a();
a();
var z = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Z = {
    ...z,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column",
  },
  Ee = {
    onClick: { type: c.EventHandler },
    onMouseEnter: { type: c.EventHandler },
    onMouseLeave: { type: c.EventHandler },
  },
  Te = {
    type: c.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  Ie = {
    font: {
      type: c.Boolean,
      title: "Font",
      defaultValue: !1,
      disabledTitle: "Default",
      enabledTitle: "Custom",
    },
    fontFamily: {
      type: c.String,
      title: "Family",
      placeholder: "Inter",
      hidden: ({ font: r }) => !r,
    },
    fontWeight: {
      type: c.Enum,
      title: "Weight",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        "Thin",
        "Extra-light",
        "Light",
        "Regular",
        "Medium",
        "Semi-bold",
        "Bold",
        "Extra-bold",
        "Black",
      ],
      hidden: ({ font: r }) => !r,
    },
  };
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
function K() {
  return E(() => I.current() === I.canvas, []);
}
a();
a();
var Pe = {
  borderRadius: {
    title: "Radius",
    type: c.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
var De = {
  padding: {
    type: c.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};
a();
function S({ type: r, url: t, html: l, style: i = {} }) {
  return r === "url" && t
    ? e(Ue, { url: t, style: i })
    : r === "html" && l
    ? e(Xe, { html: l, style: i })
    : e(je, { style: i });
}
ce(S, {
  type: {
    type: c.Enum,
    defaultValue: "url",
    displaySegmentedControl: !0,
    options: ["url", "html"],
    optionTitles: ["URL", "HTML"],
  },
  url: {
    title: "URL",
    type: c.String,
    description: "Some websites don\u2019t support embedding.",
    hidden(r) {
      return r.type !== "url";
    },
  },
  html: {
    title: "HTML",
    type: c.String,
    displayTextArea: !0,
    hidden(r) {
      return r.type !== "html";
    },
  },
});
function je({ style: r }) {
  return e("div", {
    style: { minHeight: Ae(r), ...Z, overflow: "hidden", ...r },
    children: e("div", {
      style: J,
      children:
        "To embed a website or widget, add it to the properties\xA0panel.",
    }),
  });
}
function Ue({ url: r, style: t }) {
  let l = !t.height;
  /[a-z]+:\/\//.test(r) || (r = "https://" + r);
  let i = K(),
    [d, g] = C(i ? void 0 : !1);
  if (
    (u(() => {
      if (!i) return;
      let x = !0;
      g(void 0);
      async function V() {
        let h = await fetch(
          "https://api.framer.com/functions/check-iframe-url?url=" +
            encodeURIComponent(r)
        );
        if (h.status == 200) {
          let { isBlocked: n } = await h.json();
          x && g(n);
        } else {
          let n = await h.text();
          console.error(n);
          let F = new Error("This site can\u2019t be reached.");
          g(F);
        }
      }
      return (
        V().catch((h) => {
          console.error(h), g(h);
        }),
        () => {
          x = !1;
        }
      );
    }, [r]),
    i && l)
  )
    return e(P, {
      message: "URL embeds do not support auto height.",
      style: t,
    });
  if (!r.startsWith("https://"))
    return e(P, { message: "Unsupported protocol.", style: t });
  if (d === void 0) return e(Le, {});
  if (d instanceof Error) return e(P, { message: d.message, style: t });
  if (d === !0) {
    let x = `Can\u2019t embed ${r} due to its content security policy.`;
    return e(P, { message: x, style: t });
  }
  return e("iframe", {
    src: r,
    style: { ...ye, ...t },
    loading: "lazy",
    fetchPriority: i ? "low" : "auto",
    referrerPolicy: "no-referrer",
    sandbox: He(i),
  });
}
var ye = { width: "100%", height: "100%", border: "none" };
function He(r) {
  let t = ["allow-same-origin", "allow-scripts"];
  return (
    r ||
      t.push(
        "allow-downloads",
        "allow-forms",
        "allow-modals",
        "allow-orientation-lock",
        "allow-pointer-lock",
        "allow-popups",
        "allow-popups-to-escape-sandbox",
        "allow-presentation",
        "allow-storage-access-by-user-activation",
        "allow-top-navigation-by-user-activation"
      ),
    t.join(" ")
  );
}
function Xe({ html: r, ...t }) {
  if (r.includes("</script>")) {
    let i = r.includes("</spline-viewer>"),
      d = r.includes("<!-- framer-direct-embed -->");
    return i || d ? e(Oe, { html: r, ...t }) : e(Ge, { html: r, ...t });
  }
  return e(We, { html: r, ...t });
}
function Ge({ html: r, style: t }) {
  let l = y(),
    [i, d] = C(0);
  u(() => {
    var h;
    let n = (h = l.current) === null || h === void 0 ? void 0 : h.contentWindow;
    function F(H) {
      if (H.source !== n) return;
      let k = H.data;
      if (typeof k != "object" || k === null) return;
      let N = k.embedHeight;
      typeof N == "number" && d(N);
    }
    return (
      window.addEventListener("message", F),
      n?.postMessage("getEmbedHeight", "*"),
      () => {
        window.removeEventListener("message", F);
      }
    );
  }, []);
  let g = `
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${r}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,
    x = { ...ye, ...t };
  return (
    !t.height && (x.height = i + "px"),
    e("iframe", { ref: l, style: x, srcDoc: g })
  );
}
function Oe({ html: r, style: t }) {
  let l = y();
  return (
    u(() => {
      let i = l.current;
      if (i)
        return (
          (i.innerHTML = r),
          Be(i),
          () => {
            i.innerHTML = "";
          }
        );
    }, [r]),
    e("div", { ref: l, style: { ...ve, ...t } })
  );
}
function We({ html: r, style: t }) {
  return e("div", {
    style: { ...ve, ...t },
    dangerouslySetInnerHTML: { __html: r },
  });
}
var ve = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
function Be(r) {
  if (r instanceof Element && r.tagName === "SCRIPT") {
    let t = document.createElement("script");
    t.text = r.innerHTML;
    for (let { name: l, value: i } of r.attributes) t.setAttribute(l, i);
    r.parentElement.replaceChild(t, r);
  } else for (let t of r.childNodes) Be(t);
}
function Le() {
  return e("div", {
    className: "framerInternalUI-componentPlaceholder",
    style: { ...z, overflow: "hidden" },
    children: e("div", { style: J, children: "Loading\u2026" }),
  });
}
function P({ message: r, style: t }) {
  return e("div", {
    className: "framerInternalUI-errorPlaceholder",
    style: { minHeight: Ae(t), ...z, overflow: "hidden", ...t },
    children: e("div", { style: J, children: r }),
  });
}
var J = { textAlign: "center", minWidth: 140 };
function Ae(r) {
  if (!r.height) return 200;
}
var Ye = _(L),
  qe = _(Y),
  Se = he(T.div),
  Ze = _(S),
  Q = O(v),
  Ke = O(T.a),
  Je = _(q),
  Qe = {
    Q4IHkYYWk: "(min-width: 1440px)",
    uDmuB0FSr: "(min-width: 810px) and (max-width: 1439px)",
    Vqfer6d2J: "(max-width: 809px)",
  },
  Fe = () => typeof document < "u",
  ke = "framer-lABg3",
  $e = {
    Q4IHkYYWk: "framer-v-101tdjf",
    uDmuB0FSr: "framer-v-5if3ba",
    Vqfer6d2J: "framer-v-1pujgvn",
  },
  Ce = (r, t) => `translateX(-50%) ${t}`,
  er = { delay: 0.5, duration: 0.5, ease: [0.5, 0, 0.88, 0.77], type: "tween" },
  rr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: er,
    x: 0,
    y: 0,
  },
  tr = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: -50,
  },
  ar = { delay: 0.5, duration: 0.3, ease: [0.5, 0, 0.88, 0.77], type: "tween" },
  nr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ar,
    x: 0,
    y: 0,
  },
  _e = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  re = { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 },
  te = { damping: 40, delay: 0.05, mass: 1, stiffness: 400, type: "spring" },
  ir = {
    effect: re,
    repeat: !1,
    startDelay: 0.2,
    tokenization: "word",
    transition: te,
    trigger: "onMount",
    type: "appear",
  },
  or = {
    effect: re,
    repeat: !1,
    startDelay: 0.5,
    tokenization: "word",
    transition: te,
    trigger: "onMount",
    type: "appear",
  },
  sr = { delay: 0.7, duration: 0.3, ease: [0.5, 0, 0.88, 0.77], type: "tween" },
  lr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: sr,
    x: 0,
    y: 0,
  },
  D = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.5,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  j = { delay: 0, duration: 0.2, ease: [0.5, 0, 0.88, 0.77], type: "tween" },
  $ = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.5,
    skewX: 0,
    skewY: 0,
    transition: j,
    x: 0,
    y: 0,
  },
  mr = (r, t) => `translateY(-50%) ${t}`,
  fr = {
    effect: re,
    repeat: !1,
    startDelay: 0.2,
    threshold: 0,
    tokenization: "word",
    transition: te,
    trigger: "onInView",
    type: "appear",
  },
  ze = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  cr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.5,
    skewX: 0,
    skewY: 0,
    transition: ze,
    x: 0,
    y: 0,
  },
  ee = M(),
  pr = { Desktop: "Q4IHkYYWk", Phone: "Vqfer6d2J", Tablet: "uDmuB0FSr" },
  dr = ({ height: r, id: t, width: l, ...i }) => {
    var d, g;
    return {
      ...i,
      variant:
        (g = (d = pr[i.variant]) !== null && d !== void 0 ? d : i.variant) !==
          null && g !== void 0
          ? g
          : "Q4IHkYYWk",
    };
  },
  gr = oe(function (r, t) {
    let { activeLocale: l, setLocale: i } = fe(),
      { style: d, className: g, layoutId: x, variant: V, ...h } = dr(r);
    u(() => {
      let w = M(void 0, l);
      if (w.robots) {
        let b = document.querySelector('meta[name="robots"]');
        b
          ? b.setAttribute("content", w.robots)
          : ((b = document.createElement("meta")),
            b.setAttribute("name", "robots"),
            b.setAttribute("content", w.robots),
            document.head.appendChild(b));
      }
    }, [void 0, l]),
      le(() => {
        let w = M(void 0, l);
        if (((document.title = w.title || ""), w.viewport)) {
          var b;
          (b = document.querySelector('meta[name="viewport"]')) === null ||
            b === void 0 ||
            b.setAttribute("content", w.viewport);
        }
        let ne = w.bodyClassName;
        if (ne) {
          let X = document.body;
          X.classList.forEach(
            (ie) => ie.startsWith("framer-body-") && X.classList.remove(ie)
          ),
            X.classList.add(`${w.bodyClassName}-framer-lABg3`);
        }
        return () => {
          ne &&
            document.body.classList.remove(`${w.bodyClassName}-framer-lABg3`);
        };
      }, [void 0, l]);
    let [n, F] = ue(V, Qe, !1),
      H = void 0,
      k = y(null),
      N = () => (Fe() ? n !== "Vqfer6d2J" : !0),
      Ve = () => !Fe() || n === "Vqfer6d2J",
      Ne = se(),
      ae = [];
    return (
      de({}),
      e(ge.Provider, {
        value: { primaryVariantId: "Q4IHkYYWk", variantClassNames: $e },
        children: m(me, {
          id: x ?? Ne,
          children: [
            m(T.div, {
              ...h,
              className: G(ke, ...ae, "framer-101tdjf", g),
              ref: t ?? k,
              style: { ...d },
              children: [
                e(B, {
                  children: e(A, {
                    className: "framer-1hfpdeq-container",
                    children: e(L, {
                      height: "100%",
                      id: "WfVnaKQrT",
                      intensity: 10,
                      layoutId: "WfVnaKQrT",
                      width: "100%",
                    }),
                  }),
                }),
                e(B, {
                  height: 63,
                  width: "90vw",
                  y: 24,
                  children: e(A, {
                    animate: rr,
                    className: "framer-1cwkg27-container",
                    "data-framer-appear-id": "1cwkg27",
                    initial: tr,
                    layoutScroll: !0,
                    optimized: !0,
                    transformTemplate: Ce,
                    children: e(f, {
                      breakpoint: n,
                      overrides: {
                        uDmuB0FSr: { variant: "yfSXmMvM8" },
                        Vqfer6d2J: { variant: "tIxhHMA9M" },
                      },
                      children: e(Y, {
                        height: "100%",
                        id: "AB7oQR519",
                        layoutId: "AB7oQR519",
                        style: { width: "100%" },
                        variant: "cjtTkIAp1",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                m("div", {
                  className: "framer-su8xlb",
                  "data-framer-name": "Hero-Section",
                  name: "Hero-Section",
                  children: [
                    m("div", {
                      className: "framer-bnrs5h",
                      "data-framer-name": "Hero-Text",
                      name: "Hero-Text",
                      children: [
                        m(Se, {
                          animate: nr,
                          className: "framer-jk413v",
                          "data-border": !0,
                          "data-framer-appear-id": "jk413v",
                          "data-framer-name": "Badge/M",
                          initial: _e,
                          name: "Badge/M",
                          optimized: !0,
                          children: [
                            e("div", {
                              className: "framer-av9dz7",
                              "data-framer-name": "Badge/S",
                              name: "Badge/S",
                            }),
                            e(p, {
                              __fromCanvasComponent: !0,
                              children: e(s, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                                    "--framer-font-family":
                                      '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                    "--framer-letter-spacing": "-0.04em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "Powered by",
                                }),
                              }),
                              className: "framer-wbvyot",
                              "data-framer-name": "Powered by",
                              fonts: ["CUSTOM;SF Pro Display Medium"],
                              name: "Powered by",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            e(f, {
                              breakpoint: n,
                              overrides: {
                                uDmuB0FSr: {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    loading: o(407.10303020477295),
                                    positionX: "center",
                                    positionY: "center",
                                    src: "https://framerusercontent.com/images/gRbZuApD2qk7mTp5XWU6eAjEgm8.png",
                                  },
                                },
                                Vqfer6d2J: {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    loading: o(207.10303020477295),
                                    positionX: "center",
                                    positionY: "center",
                                    src: "https://framerusercontent.com/images/gRbZuApD2qk7mTp5XWU6eAjEgm8.png",
                                  },
                                },
                              },
                              children: e(v, {
                                background: {
                                  alt: "",
                                  fit: "fit",
                                  loading: o(432),
                                  positionX: "center",
                                  positionY: "center",
                                  src: "https://framerusercontent.com/images/gRbZuApD2qk7mTp5XWU6eAjEgm8.png",
                                },
                                className: "framer-192ekv1",
                                "data-framer-name":
                                  "664e9b093bf5544ac06f7b13_Untitled (4) (1) 1",
                                name: "664e9b093bf5544ac06f7b13_Untitled (4) (1) 1",
                              }),
                            }),
                          ],
                        }),
                        m("div", {
                          className: "framer-1rhpe0c",
                          "data-framer-name": "Hero-Text",
                          name: "Hero-Text",
                          children: [
                            e(f, {
                              breakpoint: n,
                              overrides: {
                                Vqfer6d2J: {
                                  children: e(s, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                        "--framer-font-family":
                                          '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                        "--framer-font-size": "48px",
                                        "--framer-letter-spacing": "-0.04em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children:
                                        "Does your user onboarding suck?",
                                    }),
                                  }),
                                },
                              },
                              children: e(p, {
                                __fromCanvasComponent: !0,
                                children: e(s, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                      "--framer-font-family":
                                        '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      "--framer-font-size": "65px",
                                      "--framer-letter-spacing": "-0.04em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: "Does your user onboarding suck?",
                                  }),
                                }),
                                className: "framer-tchqz8",
                                "data-framer-name":
                                  "Instant, low-cost bridging",
                                effect: ir,
                                fonts: ["CUSTOM;SF Pro Display Semibold"],
                                name: "Instant, low-cost bridging",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            e(p, {
                              __fromCanvasComponent: !0,
                              children: e(s, {
                                children: e("p", {
                                  style: {
                                    "--framer-font-size": "20px",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children:
                                    "Reach users on any chain, instantly",
                                }),
                              }),
                              className: "framer-co88j7",
                              effect: or,
                              fonts: ["Inter"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    m("div", {
                      className: "framer-v3s6os",
                      "data-framer-name": "Gradient-Shapes",
                      name: "Gradient-Shapes",
                      children: [
                        e(R, {
                          className: "framer-klyi60",
                          "data-framer-name": "Polygon 1",
                          fill: "rgba(0,0,0,1)",
                          intrinsicHeight: 962,
                          intrinsicWidth: 1396,
                          name: "Polygon 1",
                          svg: `<svg width="1396" height="962" viewBox="0 0 1396 962" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_76_444)">
<path d="M1328.46 844.764L324.948 400.389L441.862 197.889L1328.46 844.764Z" fill="white" fill-opacity="0.22"/>
</g>
<defs>
<filter id="filter0_f_76_444" x="198.948" y="71.8884" width="1255.51" height="898.875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="63" result="effect1_foregroundBlur_76_444"/>
</filter>
</defs>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                        e(R, {
                          className: "framer-9qp0yx",
                          "data-framer-name": "Polygon 3",
                          fill: "rgba(0,0,0,1)",
                          intrinsicHeight: 962,
                          intrinsicWidth: 1396,
                          name: "Polygon 3",
                          svg: `<svg width="1396" height="962" viewBox="0 0 1396 962" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_76_445)">
<path d="M1327.57 844.413L324.06 400.038L440.973 197.538L1327.57 844.413Z" fill="white" fill-opacity="0.22"/>
</g>
<defs>
<filter id="filter0_f_76_445" x="198.06" y="71.5383" width="1255.51" height="898.875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="63" result="effect1_foregroundBlur_76_445"/>
</filter>
</defs>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                        e(R, {
                          className: "framer-1fzsmvt",
                          "data-framer-name": "Polygon 2",
                          fill: "rgba(0,0,0,1)",
                          intrinsicHeight: 962,
                          intrinsicWidth: 1396,
                          name: "Polygon 2",
                          svg: `<svg width="1396" height="962" viewBox="0 0 1396 962" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_76_446)">
<path d="M1327.57 844.413L324.06 400.038L440.973 197.538L1327.57 844.413Z" fill="white" fill-opacity="0.22"/>
</g>
<defs>
<filter id="filter0_f_76_446" x="198.06" y="71.5383" width="1255.51" height="898.875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="63" result="effect1_foregroundBlur_76_446"/>
</filter>
</defs>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                        e("div", {
                          className: "framer-1j2y51u",
                          "data-framer-name": "Background+Blur",
                          name: "Background+Blur",
                        }),
                        e("div", {
                          className: "framer-xspvcj",
                          "data-framer-name": "Background+Blur",
                          name: "Background+Blur",
                        }),
                      ],
                    }),
                    m("div", {
                      className: "framer-1nydwzn",
                      children: [
                        e(f, {
                          breakpoint: n,
                          overrides: {
                            uDmuB0FSr: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 2380,
                                intrinsicWidth: 2880,
                                loading: o(200),
                                pixelHeight: 1190,
                                pixelWidth: 1440,
                                sizes: "max(1440px, 100vw)",
                                src: "https://framerusercontent.com/images/uR7Z0JcYMDkpRpecrfZBPcEo.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/uR7Z0JcYMDkpRpecrfZBPcEo.webp?scale-down-to=512 512w,https://framerusercontent.com/images/uR7Z0JcYMDkpRpecrfZBPcEo.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/uR7Z0JcYMDkpRpecrfZBPcEo.webp 1440w",
                              },
                            },
                            Vqfer6d2J: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 2380,
                                intrinsicWidth: 2880,
                                loading: o(0),
                                pixelHeight: 1190,
                                pixelWidth: 1440,
                                sizes: "max(1440px, 100vw)",
                                src: "https://framerusercontent.com/images/uR7Z0JcYMDkpRpecrfZBPcEo.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/uR7Z0JcYMDkpRpecrfZBPcEo.webp?scale-down-to=512 512w,https://framerusercontent.com/images/uR7Z0JcYMDkpRpecrfZBPcEo.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/uR7Z0JcYMDkpRpecrfZBPcEo.webp 1440w",
                              },
                            },
                          },
                          children: e(v, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 2380,
                              intrinsicWidth: 2880,
                              loading: o(200),
                              pixelHeight: 1190,
                              pixelWidth: 1440,
                              sizes: "100vw",
                              src: "https://framerusercontent.com/images/uR7Z0JcYMDkpRpecrfZBPcEo.webp",
                              srcSet:
                                "https://framerusercontent.com/images/uR7Z0JcYMDkpRpecrfZBPcEo.webp?scale-down-to=512 512w,https://framerusercontent.com/images/uR7Z0JcYMDkpRpecrfZBPcEo.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/uR7Z0JcYMDkpRpecrfZBPcEo.webp 1440w",
                            },
                            className: "framer-1m5vl6z",
                            "data-framer-name": "image",
                            name: "image",
                          }),
                        }),
                        e("div", {
                          className: "framer-rt9ztc",
                          "data-framer-name": "BG",
                          name: "BG",
                        }),
                      ],
                    }),
                  ],
                }),
                m("div", {
                  className: "framer-1u3vpj1",
                  "data-framer-name": "Feature-Section",
                  name: "Feature-Section",
                  children: [
                    m("div", {
                      className: "framer-1kfccze",
                      "data-framer-name": "Feature-Pointer-Container",
                      name: "Feature-Pointer-Container",
                      children: [
                        m("div", {
                          className: "framer-1iz2az2",
                          "data-framer-name": "Feature-Text-Container",
                          name: "Feature-Text-Container",
                          children: [
                            e("div", {
                              className: "framer-uiswln",
                              "data-framer-name":
                                "Feature-Text-Heading-Container",
                              name: "Feature-Text-Heading-Container",
                              children: e(p, {
                                __fromCanvasComponent: !0,
                                children: e(s, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                      "--framer-font-family":
                                        '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      "--framer-font-size": "46px",
                                      "--framer-letter-spacing": "-0.05em",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: "Bigger is Better.",
                                  }),
                                }),
                                className: "framer-6bsvsz",
                                "data-framer-name": "Feature-Text-Heading",
                                fonts: ["CUSTOM;SF Pro Display Semibold"],
                                name: "Feature-Text-Heading",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            e(f, {
                              breakpoint: n,
                              overrides: {
                                uDmuB0FSr: {
                                  children: e(s, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                                        "--framer-font-family":
                                          '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                        "--framer-line-height": "31px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children:
                                        "Want bigger TAM? TopPointAI lets you onboard users to your chain or dapp from any other asset/chain in under 30 seconds. Transform your user acquisition strategy by leveraging our chain-agnostic swaps.",
                                    }),
                                  }),
                                },
                              },
                              children: e(p, {
                                __fromCanvasComponent: !0,
                                children: e(s, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                                      "--framer-font-family":
                                        '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      "--framer-font-size": "20px",
                                      "--framer-line-height": "31px",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children:
                                      "Want bigger TAM? TopPointAI lets you onboard users to your chain or dapp from any other asset/chain in under 30 seconds. Transform your user acquisition strategy by leveraging our chain-agnostic swaps.",
                                  }),
                                }),
                                className: "framer-1xh2f35",
                                "data-framer-name": "Body",
                                fonts: ["CUSTOM;SF Pro Display Medium"],
                                name: "Body",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        e(f, {
                          breakpoint: n,
                          overrides: {
                            uDmuB0FSr: {
                              background: {
                                alt: "",
                                fit: "stretch",
                                loading: o(1348.206060409546),
                                pixelHeight: 1214,
                                pixelWidth: 1214,
                                positionX: "center",
                                positionY: "center",
                                sizes: "1175px",
                                src: "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=512 512w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp 1214w",
                              },
                            },
                            Vqfer6d2J: {
                              background: {
                                alt: "",
                                fit: "stretch",
                                loading: o(831.2060604095459),
                                pixelHeight: 1214,
                                pixelWidth: 1214,
                                positionX: "center",
                                positionY: "center",
                                sizes: "1175px",
                                src: "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=512 512w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp 1214w",
                              },
                            },
                          },
                          children: e(v, {
                            background: {
                              alt: "",
                              fit: "stretch",
                              loading: o(1498),
                              pixelHeight: 1214,
                              pixelWidth: 1214,
                              positionX: "center",
                              positionY: "center",
                              sizes: "1175px",
                              src: "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp",
                              srcSet:
                                "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=512 512w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp 1214w",
                            },
                            className: "framer-1jiz1ni",
                            "data-framer-name": "Background+Blur",
                            name: "Background+Blur",
                          }),
                        }),
                        e(B, {
                          children: e(A, {
                            className: "framer-1sooo84-container",
                            children: e(S, {
                              height: "100%",
                              html: `<svg xmlns="http://www.w3.org/2000/svg" width="100vw" height="2" viewBox="0 0 1441 2" fill="none">
  <path d="M0.717773 0.932922H1440.72" stroke="#1D1E26" stroke-opacity="1"/>
</svg>`,
                              id: "xdb33fdfH",
                              layoutId: "xdb33fdfH",
                              style: { height: "100%", width: "100%" },
                              type: "html",
                              url: "",
                              width: "100%",
                            }),
                          }),
                        }),
                        e(f, {
                          breakpoint: n,
                          overrides: {
                            uDmuB0FSr: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1736.7522004558277,
                                intrinsicWidth: 1426.4957788192798,
                                loading: o(1233.206060409546),
                                pixelHeight: 2032,
                                pixelWidth: 1669,
                                sizes: "408px",
                                src: "https://framerusercontent.com/images/RF0takyVHUC7utycY8nSKVV1es.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/RF0takyVHUC7utycY8nSKVV1es.webp?scale-down-to=1024 841w,https://framerusercontent.com/images/RF0takyVHUC7utycY8nSKVV1es.webp 1669w",
                              },
                            },
                            Vqfer6d2J: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1736.7522004558277,
                                intrinsicWidth: 1426.4957788192798,
                                loading: o(1361.206060409546),
                                pixelHeight: 2032,
                                pixelWidth: 1669,
                                sizes: "81vw",
                                src: "https://framerusercontent.com/images/RF0takyVHUC7utycY8nSKVV1es.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/RF0takyVHUC7utycY8nSKVV1es.webp?scale-down-to=1024 841w,https://framerusercontent.com/images/RF0takyVHUC7utycY8nSKVV1es.webp 1669w",
                              },
                            },
                          },
                          children: e(Q, {
                            __framer__animate: { transition: j },
                            __framer__animateOnce: !0,
                            __framer__enter: D,
                            __framer__exit: $,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 1736.7522004558277,
                              intrinsicWidth: 1426.4957788192798,
                              loading: o(1341.5),
                              pixelHeight: 2032,
                              pixelWidth: 1669,
                              sizes: "475px",
                              src: "https://framerusercontent.com/images/RF0takyVHUC7utycY8nSKVV1es.webp",
                              srcSet:
                                "https://framerusercontent.com/images/RF0takyVHUC7utycY8nSKVV1es.webp?scale-down-to=1024 841w,https://framerusercontent.com/images/RF0takyVHUC7utycY8nSKVV1es.webp 1669w",
                            },
                            className: "framer-1424oaz",
                            "data-framer-name": "Auto_Layout_Horizontal_2_",
                            name: "Auto_Layout_Horizontal_2_",
                          }),
                        }),
                      ],
                    }),
                    m("div", {
                      className: "framer-remc2w",
                      "data-framer-name": "Feature-Pointer-Container",
                      name: "Feature-Pointer-Container",
                      children: [
                        e(f, {
                          breakpoint: n,
                          overrides: {
                            uDmuB0FSr: {
                              background: {
                                alt: "",
                                fit: "stretch",
                                loading: o(1067.6859138893994),
                                pixelHeight: 1214,
                                pixelWidth: 1214,
                                positionX: "center",
                                positionY: "center",
                                sizes: "1225px",
                                src: "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=512 512w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp 1214w",
                              },
                            },
                            Vqfer6d2J: {
                              background: {
                                alt: "",
                                fit: "stretch",
                                loading: o(772.6393937428793),
                                pixelHeight: 1214,
                                pixelWidth: 1214,
                                positionX: "center",
                                positionY: "center",
                                sizes: "1225px",
                                src: "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=512 512w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp 1214w",
                              },
                            },
                          },
                          children: e(v, {
                            background: {
                              alt: "",
                              fit: "stretch",
                              loading: o(1216.5),
                              pixelHeight: 1214,
                              pixelWidth: 1214,
                              positionX: "center",
                              positionY: "center",
                              sizes: "1225px",
                              src: "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp",
                              srcSet:
                                "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=512 512w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp 1214w",
                            },
                            className: "framer-uun7qi",
                            "data-framer-name": "Background+Blur",
                            name: "Background+Blur",
                            transformTemplate: mr,
                          }),
                        }),
                        e(f, {
                          breakpoint: n,
                          overrides: {
                            uDmuB0FSr: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1299.1453467976664,
                                intrinsicWidth: 1300.0000476837176,
                                loading: o(1875.206060409546),
                                pixelHeight: 1520,
                                pixelWidth: 1521,
                                sizes: "364px",
                                src: "https://framerusercontent.com/images/4RznDFtKNc9hRs4coZ7NAV1xU.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/4RznDFtKNc9hRs4coZ7NAV1xU.webp?scale-down-to=512 512w,https://framerusercontent.com/images/4RznDFtKNc9hRs4coZ7NAV1xU.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/4RznDFtKNc9hRs4coZ7NAV1xU.webp 1521w",
                              },
                            },
                            Vqfer6d2J: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1299.1453467976664,
                                intrinsicWidth: 1300.0000476837176,
                                loading: o(1972.206060409546),
                                pixelHeight: 1520,
                                pixelWidth: 1521,
                                sizes: "81vw",
                                src: "https://framerusercontent.com/images/4RznDFtKNc9hRs4coZ7NAV1xU.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/4RznDFtKNc9hRs4coZ7NAV1xU.webp?scale-down-to=512 512w,https://framerusercontent.com/images/4RznDFtKNc9hRs4coZ7NAV1xU.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/4RznDFtKNc9hRs4coZ7NAV1xU.webp 1521w",
                              },
                            },
                          },
                          children: e(Q, {
                            __framer__animate: { transition: j },
                            __framer__animateOnce: !0,
                            __framer__enter: D,
                            __framer__exit: $,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 1299.1453467976664,
                              intrinsicWidth: 1300.0000476837176,
                              loading: o(1981),
                              pixelHeight: 1520,
                              pixelWidth: 1521,
                              sizes: "456px",
                              src: "https://framerusercontent.com/images/4RznDFtKNc9hRs4coZ7NAV1xU.webp",
                              srcSet:
                                "https://framerusercontent.com/images/4RznDFtKNc9hRs4coZ7NAV1xU.webp?scale-down-to=512 512w,https://framerusercontent.com/images/4RznDFtKNc9hRs4coZ7NAV1xU.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/4RznDFtKNc9hRs4coZ7NAV1xU.webp 1521w",
                            },
                            className: "framer-10fbumv",
                            "data-framer-name": "Frame_1000012762_2_",
                            name: "Frame_1000012762_2_",
                          }),
                        }),
                        m("div", {
                          className: "framer-zxwjuu",
                          "data-framer-name": "Feature-Text-Container",
                          name: "Feature-Text-Container",
                          children: [
                            e("div", {
                              className: "framer-1pjg75f",
                              "data-framer-name":
                                "Feature-Text-Heading-Container",
                              name: "Feature-Text-Heading-Container",
                              children: e(f, {
                                breakpoint: n,
                                overrides: {
                                  uDmuB0FSr: {
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                          "--framer-font-family":
                                            '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                          "--framer-font-size": "44px",
                                          "--framer-letter-spacing": "-0.05em",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Access over 3,000 direct routes.",
                                      }),
                                    }),
                                  },
                                  Vqfer6d2J: {
                                    children: e(s, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                          "--framer-font-family":
                                            '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                          "--framer-font-size": "44px",
                                          "--framer-letter-spacing": "-0.05em",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Access over 3,000 direct routes.",
                                      }),
                                    }),
                                  },
                                },
                                children: e(p, {
                                  __fromCanvasComponent: !0,
                                  children: e(s, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                        "--framer-font-family":
                                          '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                        "--framer-font-size": "46px",
                                        "--framer-letter-spacing": "-0.05em",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children:
                                        "Access over 3,000 direct routes.",
                                    }),
                                  }),
                                  className: "framer-1befg5",
                                  "data-framer-name": "Feature-Text-Heading",
                                  fonts: ["CUSTOM;SF Pro Display Semibold"],
                                  name: "Feature-Text-Heading",
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            e(f, {
                              breakpoint: n,
                              overrides: {
                                uDmuB0FSr: {
                                  children: e(s, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                                        "--framer-font-family":
                                          '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                        "--framer-line-height": "31px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children:
                                        "Tap into our extensive network of over 3,000 direct routes spanning 13 chains. Ensure swift, secure transactions, and give your users the flexibility they demand.",
                                    }),
                                  }),
                                },
                              },
                              children: e(p, {
                                __fromCanvasComponent: !0,
                                children: e(s, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                                      "--framer-font-family":
                                        '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      "--framer-font-size": "20px",
                                      "--framer-line-height": "31px",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children:
                                      "Tap into our extensive network of over 3,000 direct routes spanning 13 chains. Ensure swift, secure transactions, and give your users the flexibility they demand.",
                                  }),
                                }),
                                className: "framer-1q8wgka",
                                "data-framer-name": "Body",
                                fonts: ["CUSTOM;SF Pro Display Medium"],
                                name: "Body",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    m("div", {
                      className: "framer-1vfhbdk",
                      "data-framer-name": "Feature-Pointer-Container",
                      name: "Feature-Pointer-Container",
                      children: [
                        m("div", {
                          className: "framer-2x94at",
                          "data-framer-name": "Feature-Text-Container",
                          name: "Feature-Text-Container",
                          children: [
                            e("div", {
                              className: "framer-dkf07i",
                              "data-framer-name":
                                "Feature-Text-Heading-Container",
                              name: "Feature-Text-Heading-Container",
                              children: e(p, {
                                __fromCanvasComponent: !0,
                                children: e(s, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                      "--framer-font-family":
                                        '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      "--framer-font-size": "46px",
                                      "--framer-letter-spacing": "-0.05em",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: "Scale it up a notch.",
                                  }),
                                }),
                                className: "framer-1nydy88",
                                "data-framer-name": "Feature-Text-Heading",
                                fonts: ["CUSTOM;SF Pro Display Semibold"],
                                name: "Feature-Text-Heading",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            e(f, {
                              breakpoint: n,
                              overrides: {
                                uDmuB0FSr: {
                                  children: e(s, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                                        "--framer-font-family":
                                          '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                        "--framer-line-height": "31px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children:
                                        "Our median cross-chain settlement time is <10 seconds. We only write 512 bits onchain, which means we can offer the lowest fees around. ",
                                    }),
                                  }),
                                },
                              },
                              children: e(p, {
                                __fromCanvasComponent: !0,
                                children: e(s, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                                      "--framer-font-family":
                                        '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      "--framer-font-size": "20px",
                                      "--framer-line-height": "31px",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children:
                                      "Our median cross-chain settlement time is <10 seconds. We only write 512 bits onchain, which means we can offer the lowest fees around. ",
                                  }),
                                }),
                                className: "framer-1spvcoz",
                                "data-framer-name": "Body",
                                fonts: ["CUSTOM;SF Pro Display Medium"],
                                name: "Body",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        e(B, {
                          children: e(A, {
                            className: "framer-i2w68b-container",
                            children: e(S, {
                              height: "100%",
                              html: `<svg xmlns="http://www.w3.org/2000/svg" width="100vw" height="2" viewBox="0 0 1441 2" fill="none">
  <path d="M0.717773 0.932922H1440.72" stroke="#1D1E26" stroke-opacity="1"/>
</svg>`,
                              id: "MGyu5CZoc",
                              layoutId: "MGyu5CZoc",
                              style: { height: "100%", width: "100%" },
                              type: "html",
                              url: "",
                              width: "100%",
                            }),
                          }),
                        }),
                        e(f, {
                          breakpoint: n,
                          overrides: {
                            uDmuB0FSr: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 870.085502000016,
                                intrinsicWidth: 1227.3504723693743,
                                loading: o(2494.206060409546),
                                pixelHeight: 1018,
                                pixelWidth: 1436,
                                sizes: "390px",
                                src: "https://framerusercontent.com/images/awH1o8410H2b0IIhajmcnUNCl0.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/awH1o8410H2b0IIhajmcnUNCl0.webp?scale-down-to=512 512w,https://framerusercontent.com/images/awH1o8410H2b0IIhajmcnUNCl0.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/awH1o8410H2b0IIhajmcnUNCl0.webp 1436w",
                              },
                            },
                            Vqfer6d2J: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 870.085502000016,
                                intrinsicWidth: 1227.3504723693743,
                                loading: o(2718.206060409546),
                                pixelHeight: 1018,
                                pixelWidth: 1436,
                                sizes: "81vw",
                                src: "https://framerusercontent.com/images/awH1o8410H2b0IIhajmcnUNCl0.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/awH1o8410H2b0IIhajmcnUNCl0.webp?scale-down-to=512 512w,https://framerusercontent.com/images/awH1o8410H2b0IIhajmcnUNCl0.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/awH1o8410H2b0IIhajmcnUNCl0.webp 1436w",
                              },
                            },
                          },
                          children: e(Q, {
                            __framer__animate: { transition: j },
                            __framer__animateOnce: !0,
                            __framer__enter: D,
                            __framer__exit: $,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 870.085502000016,
                              intrinsicWidth: 1227.3504723693743,
                              loading: o(2621),
                              pixelHeight: 1018,
                              pixelWidth: 1436,
                              sizes: "469px",
                              src: "https://framerusercontent.com/images/awH1o8410H2b0IIhajmcnUNCl0.webp",
                              srcSet:
                                "https://framerusercontent.com/images/awH1o8410H2b0IIhajmcnUNCl0.webp?scale-down-to=512 512w,https://framerusercontent.com/images/awH1o8410H2b0IIhajmcnUNCl0.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/awH1o8410H2b0IIhajmcnUNCl0.webp 1436w",
                            },
                            className: "framer-a0qivw",
                            "data-framer-name": "Frame_1000015083",
                            name: "Frame_1000015083",
                          }),
                        }),
                      ],
                    }),
                    e(f, {
                      breakpoint: n,
                      overrides: {
                        uDmuB0FSr: {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: o(1469.206060409546),
                            pixelHeight: 2260,
                            pixelWidth: 2880,
                            sizes: "2049px",
                            src: "https://framerusercontent.com/images/oKLkbtEwjyXXPxdGzmTfAJCCXU.webp",
                            srcSet:
                              "https://framerusercontent.com/images/oKLkbtEwjyXXPxdGzmTfAJCCXU.webp?scale-down-to=512 512w,https://framerusercontent.com/images/oKLkbtEwjyXXPxdGzmTfAJCCXU.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/oKLkbtEwjyXXPxdGzmTfAJCCXU.webp?scale-down-to=2048 2048w,https://framerusercontent.com/images/oKLkbtEwjyXXPxdGzmTfAJCCXU.webp 2880w",
                          },
                        },
                        Vqfer6d2J: {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: o(2399.206060409546),
                            pixelHeight: 2260,
                            pixelWidth: 2880,
                            sizes: "2049px",
                            src: "https://framerusercontent.com/images/oKLkbtEwjyXXPxdGzmTfAJCCXU.webp",
                            srcSet:
                              "https://framerusercontent.com/images/oKLkbtEwjyXXPxdGzmTfAJCCXU.webp?scale-down-to=512 512w,https://framerusercontent.com/images/oKLkbtEwjyXXPxdGzmTfAJCCXU.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/oKLkbtEwjyXXPxdGzmTfAJCCXU.webp?scale-down-to=2048 2048w,https://framerusercontent.com/images/oKLkbtEwjyXXPxdGzmTfAJCCXU.webp 2880w",
                          },
                        },
                      },
                      children: e(v, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: o(1624),
                          pixelHeight: 2260,
                          pixelWidth: 2880,
                          sizes: "2049px",
                          src: "https://framerusercontent.com/images/oKLkbtEwjyXXPxdGzmTfAJCCXU.webp",
                          srcSet:
                            "https://framerusercontent.com/images/oKLkbtEwjyXXPxdGzmTfAJCCXU.webp?scale-down-to=512 512w,https://framerusercontent.com/images/oKLkbtEwjyXXPxdGzmTfAJCCXU.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/oKLkbtEwjyXXPxdGzmTfAJCCXU.webp?scale-down-to=2048 2048w,https://framerusercontent.com/images/oKLkbtEwjyXXPxdGzmTfAJCCXU.webp 2880w",
                        },
                        className: "framer-1bsbc75",
                        "data-framer-name": "image 9",
                        name: "image 9",
                        transformTemplate: Ce,
                      }),
                    }),
                  ],
                }),
                N() &&
                  e("div", {
                    className: "framer-4nx05f hidden-1pujgvn",
                    "data-framer-name": "Frame 1000001046",
                    name: "Frame 1000001046",
                    children: m("div", {
                      className: "framer-cpljgx",
                      "data-framer-name": "Frame 1000001045",
                      name: "Frame 1000001045",
                      children: [
                        e("div", {
                          className: "framer-11n9oxm",
                          "data-framer-name": "Frame 1000001067",
                          name: "Frame 1000001067",
                          children: e(p, {
                            __fromCanvasComponent: !0,
                            children: e(s, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                  "--framer-font-family":
                                    '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                  "--framer-font-size": "56px",
                                  "--framer-letter-spacing": "-1.82px",
                                  "--framer-line-height": "62px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: "Ready to build with TopPointAI?",
                              }),
                            }),
                            className: "framer-jo517y",
                            "data-framer-name": "Want to build with TopPointAI?",
                            effect: fr,
                            fonts: ["CUSTOM;SF Pro Display Semibold"],
                            name: "Want to build with TopPointAI?",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                  }),
                e(f, {
                  breakpoint: n,
                  overrides: {
                    uDmuB0FSr: { y: 3659.201912765503 },
                    Vqfer6d2J: { y: 4959.201912765503 },
                  },
                  children: e(B, {
                    height: 128,
                    width: "100vw",
                    y: 3813.995852355957,
                    children: e(A, {
                      className: "framer-vssine-container",
                      children: e(f, {
                        breakpoint: n,
                        overrides: {
                          uDmuB0FSr: { variant: "UUXNeV_D9" },
                          Vqfer6d2J: { variant: "uKYbUZw9a" },
                        },
                        children: e(q, {
                          height: "100%",
                          id: "DjYddH0bY",
                          layoutId: "DjYddH0bY",
                          style: { width: "100%" },
                          variant: "lg5rA0IwE",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
                Ve() &&
                  e("div", {
                    className: "framer-2p3gy5 hidden-101tdjf hidden-5if3ba",
                    "data-framer-name": "Frame 1000001046",
                    name: "Frame 1000001046",
                    children: m("div", {
                      className: "framer-m6psz1",
                      "data-framer-name": "Frame 1000001045",
                      name: "Frame 1000001045",
                      children: [
                        e("div", {
                          className: "framer-10vq2a6",
                          "data-framer-name": "Frame 1000001067",
                          name: "Frame 1000001067",
                          children: e(p, {
                            __fromCanvasComponent: !0,
                            children: e(s, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                  "--framer-font-family":
                                    '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                  "--framer-font-size": "56px",
                                  "--framer-letter-spacing": "-1.82px",
                                  "--framer-line-height": "62px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: "Ready to build with TopPointAI?",
                              }),
                            }),
                            className: "framer-4smzby",
                            "data-framer-name": "Want to build with TopPointAI?",
                            fonts: ["CUSTOM;SF Pro Display Semibold"],
                            name: "Want to build with TopPointAI?",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e("div", {
                          className: "framer-oockl8",
                          "data-framer-name": "Frame 1000001026",
                          name: "Frame 1000001026",
                          children: e("div", {
                            className: "framer-1due3d7",
                            "data-framer-name": "Frame 1000001025",
                            name: "Frame 1000001025",
                            children: e(p, {
                              __fromCanvasComponent: !0,
                              children: e(s, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                                    "--framer-font-family":
                                      '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                    "--framer-line-height": "26.63px",
                                    "--framer-text-color": "rgb(70, 70, 70)",
                                  },
                                  children: "Integrate Now",
                                }),
                              }),
                              className: "framer-6kzebg",
                              "data-framer-name": "Integrate Now",
                              fonts: ["CUSTOM;SF Pro Display Bold"],
                              name: "Integrate Now",
                              verticalAlignment: "center",
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
              ],
            }),
            e("div", { className: G(ke, ...ae), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  hr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${ee.bodyClassName}-framer-lABg3 { background: rgb(3, 4, 13); }`,
    ".framer-lABg3.framer-1ansgdw, .framer-lABg3 .framer-1ansgdw { display: block; }",
    ".framer-lABg3.framer-101tdjf { align-content: center; align-items: center; background-color: #03040d; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1440px; }",
    ".framer-lABg3 .framer-1hfpdeq-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-lABg3 .framer-1cwkg27-container { flex: none; height: auto; left: 50%; position: fixed; top: 24px; transform: translateX(-50%); width: 90%; z-index: 10; }",
    ".framer-lABg3 .framer-su8xlb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 0; }",
    ".framer-lABg3 .framer-bnrs5h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }",
    ".framer-lABg3 .framer-jk413v { --border-bottom-width: 0.8878787755966187px; --border-color: rgba(255, 255, 255, 0.15); --border-left-width: 0.8878787755966187px; --border-right-width: 0.8878787755966187px; --border-style: solid; --border-top-width: 0.8878787755966187px; align-content: center; align-items: center; background-color: #000000; border-bottom-left-radius: 44px; border-bottom-right-radius: 44px; border-top-left-radius: 44px; border-top-right-radius: 44px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 7.103030204772949px 12.430302619934082px 7.103030204772949px 12.430302619934082px; position: relative; width: min-content; }",
    ".framer-lABg3 .framer-av9dz7 { align-content: center; align-items: center; background-color: #6843ff; border-bottom-left-radius: 36px; border-bottom-right-radius: 36px; border-top-left-radius: 36px; border-top-right-radius: 36px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: 13px; justify-content: center; overflow: visible; padding: 8.878787994384766px; position: relative; width: 25px; }",
    ".framer-lABg3 .framer-wbvyot, .framer-lABg3 .framer-16ymarm, .framer-lABg3 .framer-5snt3, .framer-lABg3 .framer-6kzebg { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-lABg3 .framer-192ekv1 { flex: none; height: 20px; position: relative; width: 37px; }",
    ".framer-lABg3 .framer-1rhpe0c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-lABg3 .framer-tchqz8 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 645px; word-break: break-word; word-wrap: break-word; }",
    ".framer-lABg3 .framer-co88j7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; opacity: 0.8; position: relative; white-space: pre; width: auto; }",
    ".framer-lABg3 .framer-yzipo3 { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 57px; justify-content: flex-start; overflow: visible; padding: 8px; position: relative; width: min-content; }",
    ".framer-lABg3 .framer-1irrmpc { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 5px 15px 5px 15px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-lABg3 .framer-v3s6os { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }",
    ".framer-lABg3 .framer-klyi60 { flex: none; height: 962px; left: -522px; position: absolute; top: -485px; width: 1396px; }",
    ".framer-lABg3 .framer-9qp0yx { flex: none; height: 962px; left: -1042px; position: absolute; top: -484px; width: 1396px; }",
    ".framer-lABg3 .framer-1fzsmvt { flex: none; height: 962px; left: -653px; position: absolute; top: -813px; width: 1396px; }",
    ".framer-lABg3 .framer-1j2y51u { -webkit-filter: blur(189.89999389648438px); background-color: rgba(70, 70, 70, 0.3); border-bottom-left-radius: 10000px; border-bottom-right-radius: 10000px; border-top-left-radius: 10000px; border-top-right-radius: 10000px; bottom: 149px; filter: blur(189.89999389648438px); flex: none; height: 565px; left: 0px; position: absolute; width: 565px; }",
    ".framer-lABg3 .framer-xspvcj { -webkit-filter: blur(189.89999389648438px); background-color: rgba(183, 183, 183, 0.3); border-bottom-left-radius: 10000px; border-bottom-right-radius: 10000px; border-top-left-radius: 10000px; border-top-right-radius: 10000px; filter: blur(189.89999389648438px); flex: none; height: 352px; left: 967px; position: absolute; top: 243px; width: 352px; }",
    ".framer-lABg3 .framer-1nydwzn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: 0px; transform: translateX(-50%); width: 100%; z-index: 1; }",
    ".framer-lABg3 .framer-1m5vl6z { aspect-ratio: 1.2100840336134453 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1190px); overflow: visible; position: relative; width: 100%; z-index: 1; }",
    ".framer-lABg3 .framer-rt9ztc { background: linear-gradient(-89.99999999999997deg, rgba(6, 7, 23, 0) 0%, rgba(7, 8, 23, 1) 49.47916567325592%, rgba(1, 2, 19, 0) 100%); flex: none; height: 477px; position: relative; width: 1440px; z-index: 0; }",
    ".framer-lABg3 .framer-1u3vpj1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 158px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-lABg3 .framer-1kfccze { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 546px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 75%; z-index: 2; }",
    ".framer-lABg3 .framer-1iz2az2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 356px; }",
    ".framer-lABg3 .framer-uiswln, .framer-lABg3 .framer-dkf07i { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-lABg3 .framer-6bsvsz { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 316px; word-break: break-word; word-wrap: break-word; }",
    ".framer-lABg3 .framer-1xh2f35 { --framer-paragraph-spacing: 0px; flex: none; height: auto; opacity: 0.8; position: relative; white-space: pre-wrap; width: 356px; word-break: break-word; word-wrap: break-word; }",
    ".framer-lABg3 .framer-1jiz1ni { -webkit-filter: blur(0px); aspect-ratio: 1 / 1; bottom: -769px; filter: blur(0px); flex: none; height: var(--framer-aspect-ratio-supported, 1175px); position: absolute; right: -742px; width: 1175px; z-index: 1; }",
    ".framer-lABg3 .framer-1sooo84-container { bottom: 0px; flex: none; height: 4px; left: calc(50.00000000000002% - 100% / 2); position: absolute; width: 100%; z-index: 1; }",
    ".framer-lABg3 .framer-1424oaz { aspect-ratio: 0.8213582677165355 / 1; flex: none; height: 579px; overflow: visible; position: relative; width: var(--framer-aspect-ratio-supported, 476px); }",
    ".framer-lABg3 .framer-remc2w, .framer-lABg3 .framer-1vfhbdk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 546px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 75%; z-index: 1; }",
    ".framer-lABg3 .framer-uun7qi { -webkit-filter: blur(0px); aspect-ratio: 1 / 1; filter: blur(0px); flex: none; height: var(--framer-aspect-ratio-supported, 1225px); left: -833px; position: absolute; top: -20%; transform: translateY(-50%); width: 1225px; z-index: 0; }",
    ".framer-lABg3 .framer-10fbumv { -webkit-mask: radial-gradient(50% 50% at 50% 50%, #000000 23.22316212697072%, rgba(0,0,0,0) 100%) add; aspect-ratio: 1.000657894736842 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 456px); mask: radial-gradient(50% 50% at 50% 50%, #000000 23.22316212697072%, rgba(0,0,0,0) 100%) add; mix-blend-mode: multiply; overflow: visible; position: relative; width: 456px; }",
    ".framer-lABg3 .framer-zxwjuu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 258px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-lABg3 .framer-1pjg75f { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: 1px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-lABg3 .framer-1befg5 { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: 1px; position: relative; white-space: pre-wrap; width: 361px; word-break: break-word; word-wrap: break-word; }",
    ".framer-lABg3 .framer-1q8wgka { --framer-paragraph-spacing: 0px; flex: none; height: auto; opacity: 0.8; position: relative; white-space: pre-wrap; width: 389px; word-break: break-word; word-wrap: break-word; }",
    ".framer-lABg3 .framer-2x94at { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-lABg3 .framer-1nydy88 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 342px; word-break: break-word; word-wrap: break-word; }",
    ".framer-lABg3 .framer-1spvcoz { --framer-paragraph-spacing: 0px; flex: none; height: auto; opacity: 0.8; position: relative; white-space: pre-wrap; width: 312px; word-break: break-word; word-wrap: break-word; }",
    ".framer-lABg3 .framer-i2w68b-container { flex: none; height: 4px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 1; }",
    ".framer-lABg3 .framer-a0qivw { aspect-ratio: 1.4106090373280944 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 333px); overflow: visible; position: relative; width: 469px; }",
    ".framer-lABg3 .framer-1bsbc75 { aspect-ratio: 1.275840597758406 / 1; bottom: -170px; flex: none; height: var(--framer-aspect-ratio-supported, 1606px); left: 50%; position: absolute; transform: translateX(-50%); width: 2049px; z-index: 0; }",
    ".framer-lABg3 .framer-4nx05f, .framer-lABg3 .framer-2p3gy5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 250px 0px 100px 0px; position: relative; width: 1440px; }",
    ".framer-lABg3 .framer-cpljgx, .framer-lABg3 .framer-m6psz1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 42px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-lABg3 .framer-11n9oxm, .framer-lABg3 .framer-10vq2a6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-lABg3 .framer-jo517y { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 584px; word-break: break-word; word-wrap: break-word; }",
    ".framer-lABg3 .framer-1cc2lki, .framer-lABg3 .framer-oockl8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-lABg3 .framer-1sru66 { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 12.682926177978516px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-lABg3 .framer-vssine-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-lABg3 .framer-4smzby { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 343px; word-break: break-word; word-wrap: break-word; }",
    ".framer-lABg3 .framer-1due3d7 { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 12.682926177978516px; position: relative; width: min-content; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-lABg3.framer-101tdjf, .framer-lABg3 .framer-su8xlb, .framer-lABg3 .framer-bnrs5h, .framer-lABg3 .framer-jk413v, .framer-lABg3 .framer-av9dz7, .framer-lABg3 .framer-1rhpe0c, .framer-lABg3 .framer-yzipo3, .framer-lABg3 .framer-1irrmpc, .framer-lABg3 .framer-1nydwzn, .framer-lABg3 .framer-1u3vpj1, .framer-lABg3 .framer-1iz2az2, .framer-lABg3 .framer-uiswln, .framer-lABg3 .framer-zxwjuu, .framer-lABg3 .framer-1pjg75f, .framer-lABg3 .framer-2x94at, .framer-lABg3 .framer-dkf07i, .framer-lABg3 .framer-4nx05f, .framer-lABg3 .framer-cpljgx, .framer-lABg3 .framer-11n9oxm, .framer-lABg3 .framer-1cc2lki, .framer-lABg3 .framer-1sru66, .framer-lABg3 .framer-2p3gy5, .framer-lABg3 .framer-m6psz1, .framer-lABg3 .framer-10vq2a6, .framer-lABg3 .framer-oockl8, .framer-lABg3 .framer-1due3d7 { gap: 0px; } .framer-lABg3.framer-101tdjf > *, .framer-lABg3 .framer-1nydwzn > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-lABg3.framer-101tdjf > :first-child, .framer-lABg3 .framer-su8xlb > :first-child, .framer-lABg3 .framer-bnrs5h > :first-child, .framer-lABg3 .framer-av9dz7 > :first-child, .framer-lABg3 .framer-1rhpe0c > :first-child, .framer-lABg3 .framer-yzipo3 > :first-child, .framer-lABg3 .framer-1nydwzn > :first-child, .framer-lABg3 .framer-1u3vpj1 > :first-child, .framer-lABg3 .framer-1iz2az2 > :first-child, .framer-lABg3 .framer-uiswln > :first-child, .framer-lABg3 .framer-zxwjuu > :first-child, .framer-lABg3 .framer-1pjg75f > :first-child, .framer-lABg3 .framer-2x94at > :first-child, .framer-lABg3 .framer-dkf07i > :first-child, .framer-lABg3 .framer-4nx05f > :first-child, .framer-lABg3 .framer-cpljgx > :first-child, .framer-lABg3 .framer-11n9oxm > :first-child, .framer-lABg3 .framer-2p3gy5 > :first-child, .framer-lABg3 .framer-m6psz1 > :first-child, .framer-lABg3 .framer-10vq2a6 > :first-child { margin-top: 0px; } .framer-lABg3.framer-101tdjf > :last-child, .framer-lABg3 .framer-su8xlb > :last-child, .framer-lABg3 .framer-bnrs5h > :last-child, .framer-lABg3 .framer-av9dz7 > :last-child, .framer-lABg3 .framer-1rhpe0c > :last-child, .framer-lABg3 .framer-yzipo3 > :last-child, .framer-lABg3 .framer-1nydwzn > :last-child, .framer-lABg3 .framer-1u3vpj1 > :last-child, .framer-lABg3 .framer-1iz2az2 > :last-child, .framer-lABg3 .framer-uiswln > :last-child, .framer-lABg3 .framer-zxwjuu > :last-child, .framer-lABg3 .framer-1pjg75f > :last-child, .framer-lABg3 .framer-2x94at > :last-child, .framer-lABg3 .framer-dkf07i > :last-child, .framer-lABg3 .framer-4nx05f > :last-child, .framer-lABg3 .framer-cpljgx > :last-child, .framer-lABg3 .framer-11n9oxm > :last-child, .framer-lABg3 .framer-2p3gy5 > :last-child, .framer-lABg3 .framer-m6psz1 > :last-child, .framer-lABg3 .framer-10vq2a6 > :last-child { margin-bottom: 0px; } .framer-lABg3 .framer-su8xlb > *, .framer-lABg3 .framer-yzipo3 > *, .framer-lABg3 .framer-4nx05f > *, .framer-lABg3 .framer-2p3gy5 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-lABg3 .framer-bnrs5h > *, .framer-lABg3 .framer-1rhpe0c > * { margin: 0px; margin-bottom: calc(15px / 2); margin-top: calc(15px / 2); } .framer-lABg3 .framer-jk413v > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-lABg3 .framer-jk413v > :first-child, .framer-lABg3 .framer-1irrmpc > :first-child, .framer-lABg3 .framer-1cc2lki > :first-child, .framer-lABg3 .framer-1sru66 > :first-child, .framer-lABg3 .framer-oockl8 > :first-child, .framer-lABg3 .framer-1due3d7 > :first-child { margin-left: 0px; } .framer-lABg3 .framer-jk413v > :last-child, .framer-lABg3 .framer-1irrmpc > :last-child, .framer-lABg3 .framer-1cc2lki > :last-child, .framer-lABg3 .framer-1sru66 > :last-child, .framer-lABg3 .framer-oockl8 > :last-child, .framer-lABg3 .framer-1due3d7 > :last-child { margin-right: 0px; } .framer-lABg3 .framer-av9dz7 > * { margin: 0px; margin-bottom: calc(8.878787994384766px / 2); margin-top: calc(8.878787994384766px / 2); } .framer-lABg3 .framer-1irrmpc > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-lABg3 .framer-1u3vpj1 > *, .framer-lABg3 .framer-11n9oxm > *, .framer-lABg3 .framer-10vq2a6 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-lABg3 .framer-1iz2az2 > *, .framer-lABg3 .framer-zxwjuu > *, .framer-lABg3 .framer-2x94at > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-lABg3 .framer-uiswln > *, .framer-lABg3 .framer-1pjg75f > *, .framer-lABg3 .framer-dkf07i > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-lABg3 .framer-cpljgx > *, .framer-lABg3 .framer-m6psz1 > * { margin: 0px; margin-bottom: calc(42px / 2); margin-top: calc(42px / 2); } .framer-lABg3 .framer-1cc2lki > *, .framer-lABg3 .framer-oockl8 > * { margin: 0px; margin-left: calc(9.512194633483887px / 2); margin-right: calc(9.512194633483887px / 2); } .framer-lABg3 .framer-1sru66 > *, .framer-lABg3 .framer-1due3d7 > * { margin: 0px; margin-left: calc(15.853657722473145px / 2); margin-right: calc(15.853657722473145px / 2); } }",
    "@media (min-width: 1440px) { .framer-lABg3 .hidden-101tdjf { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1439px) { .framer-lABg3 .hidden-5if3ba { display: none !important; } .${ee.bodyClassName}-framer-lABg3 { background: rgb(3, 4, 13); } .framer-lABg3.framer-101tdjf { width: 810px; } .framer-lABg3 .framer-su8xlb { height: min-content; } .framer-lABg3 .framer-bnrs5h { padding: 200px 0px 100px 0px; } .framer-lABg3 .framer-1irrmpc { padding: 12px; } .framer-lABg3 .framer-1nydwzn { height: 100%; justify-content: flex-start; left: calc(50.00000000000002% - 100% / 2); overflow: visible; transform: unset; } .framer-lABg3 .framer-1m5vl6z { height: 165%; min-width: 100%; width: var(--framer-aspect-ratio-supported, 1230px); } .framer-lABg3 .framer-1u3vpj1 { width: 90%; } .framer-lABg3 .framer-1kfccze { order: 0; width: 100%; } .framer-lABg3 .framer-1iz2az2, .framer-lABg3 .framer-2x94at { width: 40%; } .framer-lABg3 .framer-1xh2f35, .framer-lABg3 .framer-1nydy88, .framer-lABg3 .framer-1spvcoz { width: 100%; } .framer-lABg3 .framer-1424oaz { height: var(--framer-aspect-ratio-supported, 497px); width: 408px; } .framer-lABg3 .framer-remc2w { height: 541px; order: 1; width: 100%; } .framer-lABg3 .framer-10fbumv { height: var(--framer-aspect-ratio-supported, 364px); width: 364px; } .framer-lABg3 .framer-1q8wgka { align-self: stretch; width: auto; } .framer-lABg3 .framer-1vfhbdk { order: 2; width: 100%; } .framer-lABg3 .framer-a0qivw { height: var(--framer-aspect-ratio-supported, 277px); width: 390px; } .framer-lABg3 .framer-1bsbc75 { order: 3; }}`,
    `@media (max-width: 809px) { .framer-lABg3 .hidden-1pujgvn { display: none !important; } .${ee.bodyClassName}-framer-lABg3 { background: rgb(3, 4, 13); } .framer-lABg3.framer-101tdjf { width: 390px; } .framer-lABg3 .framer-1hfpdeq-container { order: 6; } .framer-lABg3 .framer-1cwkg27-container, .framer-lABg3 .framer-m6psz1 { order: 0; } .framer-lABg3 .framer-su8xlb { height: min-content; order: 1; } .framer-lABg3 .framer-bnrs5h { padding: 200px 0px 100px 0px; width: 90%; } .framer-lABg3 .framer-1rhpe0c, .framer-lABg3 .framer-tchqz8, .framer-lABg3 .framer-1xh2f35, .framer-lABg3 .framer-zxwjuu, .framer-lABg3 .framer-1q8wgka, .framer-lABg3 .framer-1spvcoz { width: 100%; } .framer-lABg3 .framer-1irrmpc { padding: 8px; } .framer-lABg3 .framer-1nydwzn { height: 100%; justify-content: flex-start; left: calc(50.00000000000002% - 100% / 2); overflow: visible; transform: unset; } .framer-lABg3 .framer-1m5vl6z { height: 165%; min-width: 100%; width: var(--framer-aspect-ratio-supported, 1149px); } .framer-lABg3 .framer-rt9ztc { height: 894px; } .framer-lABg3 .framer-1u3vpj1 { order: 2; padding: 158px 0px 500px 0px; width: 90%; } .framer-lABg3 .framer-1kfccze, .framer-lABg3 .framer-remc2w, .framer-lABg3 .framer-1vfhbdk { flex-direction: column; gap: 0px; height: min-content; justify-content: center; width: 90%; } .framer-lABg3 .framer-1iz2az2 { order: 0; width: 100%; } .framer-lABg3 .framer-1jiz1ni { bottom: -66px; order: 1; right: -514px; } .framer-lABg3 .framer-1sooo84-container, .framer-lABg3 .framer-i2w68b-container { order: 2; } .framer-lABg3 .framer-1424oaz { height: var(--framer-aspect-ratio-supported, 385px); order: 3; width: 100%; } .framer-lABg3 .framer-uun7qi { left: -521px; top: -82%; } .framer-lABg3 .framer-10fbumv { height: var(--framer-aspect-ratio-supported, 316px); width: 100%; } .framer-lABg3 .framer-2x94at { order: 1; width: 100%; } .framer-lABg3 .framer-a0qivw { height: var(--framer-aspect-ratio-supported, 224px); order: 0; width: 100%; } .framer-lABg3 .framer-1bsbc75 { bottom: 0px; left: 50%; } .framer-lABg3 .framer-vssine-container { order: 7; } .framer-lABg3 .framer-2p3gy5 { order: 4; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-lABg3 .framer-1kfccze, .framer-lABg3 .framer-remc2w, .framer-lABg3 .framer-1vfhbdk { gap: 0px; } .framer-lABg3 .framer-1kfccze > *, .framer-lABg3 .framer-remc2w > *, .framer-lABg3 .framer-1vfhbdk > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-lABg3 .framer-1kfccze > :first-child, .framer-lABg3 .framer-remc2w > :first-child, .framer-lABg3 .framer-1vfhbdk > :first-child { margin-top: 0px; } .framer-lABg3 .framer-1kfccze > :last-child, .framer-lABg3 .framer-remc2w > :last-child, .framer-lABg3 .framer-1vfhbdk > :last-child { margin-bottom: 0px; } }}`,
    '.framer-lABg3[data-border="true"]::after, .framer-lABg3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  U = pe(gr, hr, "framer-lABg3"),
  va = U;
U.displayName = "Page";
U.defaultProps = { height: 3356, width: 1440 };
xe(
  U,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "SF Pro Display Medium",
          source: "custom",
          url: "https://framerusercontent.com/assets/t3oAfXfUztEwRkUgp2RBWw8zPg.woff2",
        },
        {
          family: "SF Pro Display Semibold",
          source: "custom",
          url: "https://framerusercontent.com/assets/23WE8KgQxTKm5ZTqhpfUcgupWU.woff2",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
        {
          family: "SF Pro Display Bold",
          source: "custom",
          url: "https://framerusercontent.com/assets/PnEiOE3UsAdQnLZAEmxMus2UHA.woff2",
        },
      ],
    },
    ...Ye,
    ...qe,
    ...Ze,
    ...Je,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Ba = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerP4IqgffB8",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerResponsiveScreen: "",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"uDmuB0FSr":{"layout":["fixed","auto"]},"Vqfer6d2J":{"layout":["fixed","auto"]}}}',
        framerIntrinsicWidth: "1440",
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "3356",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Ba as __FramerMetadata__, va as default };
//# sourceMappingURL=hGS_YF-jjjtdPqLlwW7G53Y5YFqZR--Mdyd2-dDOaGM.TS5P5O4Z.mjs.map
