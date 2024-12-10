import { a as A } from "./chunk-C27OKLDZ.mjs";
import { a as ne } from "./chunk-6EVAU3GL.mjs";
import { a as oe, b as se } from "./chunk-DX3U3FYQ.mjs";
import "./chunk-XZV3RH4H.mjs";
import {
  A as G,
  C as xe,
  D as re,
  F as g,
  I as q,
  J as O,
  K as ae,
  L as ue,
  M as P,
  N as D,
  P as Y,
  Q as be,
  R as ye,
  T as te,
  W as n,
  Z as ie,
  b as a,
  ba as ve,
  ca as Le,
  d as R,
  ea as ke,
  f as he,
  fa as Fe,
  g as v,
  h as E,
  i as we,
  ia as d,
  j as ge,
  ja as s,
  k as L,
  l as X,
  la as H,
  ma as x,
  na as K,
  o as e,
  oa as W,
  p as i,
  q as ee,
  r as p,
  s as T,
} from "./chunk-EDRQTDHZ.mjs";
import { f as N } from "./chunk-LPOYIOKO.mjs";
N();
N();
var _e =
  "https://lottie.host/d826e0a7-b7e8-4072-8afe-c943ed2dd2ca/DpX3m5yT5Z.lottie";
function k(r) {
  return e(Ge, { loading: e("div", {}), loaded: e(Te, { ...r }) });
}
function Te(r) {
  let o = re.current() === re.canvas,
    l = L(null),
    m = o || r.hover === !0 || r.autoplay === !1 ? null : !0,
    c;
  switch (r.srcType) {
    case "url":
      c = r.srcUrl;
      break;
    case "file":
      c = r.srcFile;
      break;
    default:
      c = _e;
      break;
  }
  let [u, b] = X(!1);
  v(() => {
    l.current && l.current.addEventListener("ready", () => b(!0));
  }, []),
    v(() => {
      l.current && l.current.seek(`${r.progress}%`);
    }, [u, r.progress]);
  let S = L();
  return (
    v(() => {
      if (!o) {
        if (S.current !== r.autoplay) {
          if (!l.current) return;
          r.autoplay === !0 && l.current.play(),
            r.autoplay === !1 && l.current.pause();
        }
        S.current = r.autoplay;
      }
    }, [r.autoplay]),
    e(
      "dotlottie-player",
      {
        src: c,
        ref: l,
        autoplay: m,
        loop: r.loop ? !0 : null,
        hover: r.hover ? !0 : null,
        controls: r.controls ? !0 : null,
        background: r.background ? r.background : null,
        speed: r.speed,
        direction: r.direction,
        style: { ...r.style, width: "100%", height: "100%" },
      },
      c
    )
  );
}
k.defaultProps = {
  srcUrl: _e,
  autoplay: !0,
  background: "#05F",
  controls: !1,
  direction: 1,
  hover: !1,
  loop: !0,
  speed: 1,
};
k.displayName = "Dot Lottie";
q(k, {
  srcType: {
    type: g.Enum,
    displaySegmentedControl: !0,
    title: "Source",
    options: ["url", "file"],
    optionTitles: ["URL", "File"],
  },
  srcUrl: {
    type: g.String,
    title: "Link",
    placeholder: "../example.lottie",
    hidden: (r) => r.srcType === "file",
  },
  srcFile: {
    type: g.File,
    title: "File",
    allowedFileTypes: ["lottie", "json"],
    hidden: (r) => r.srcType === "url",
  },
  autoplay: { type: g.Boolean, title: "Autoplay", defaultValue: !0 },
  background: { type: g.Color, title: "Backdrop", defaultValue: "#05F" },
  controls: { type: g.Boolean, title: "Controls" },
  direction: {
    type: g.Enum,
    title: "Direction",
    defaultValue: "1",
    displaySegmentedControl: !0,
    segmentedControlDirection: "horizontal",
    options: ["1", "-1"],
    optionTitles: ["Normal", "Reverse"],
  },
  hover: { type: g.Boolean, title: "Hover Play" },
  loop: { type: g.Boolean, title: "Loop" },
  speed: {
    type: g.Number,
    title: "Speed",
    defaultValue: 1,
    min: 1,
    max: 10,
    unit: "x",
    step: 0.5,
    displayStepper: !0,
  },
  progress: {
    type: g.Number,
    title: "Progress",
    defaultValue: 0,
    min: 0,
    max: 100,
    step: 1,
    description:
      "This component is made for Lottie files. [Learn more here](https://dotlottie.io/).",
  },
});
function Ge({ loading: r, loaded: o }) {
  let [l, m] = X(!0);
  return (
    v(() => {
      import("./dotlottie-player-NQJBZKCV.mjs").then(() => {
        m(!1);
      });
    }, []),
    l ? r : o
  );
}
N();
var qe = ["gqZ2V3s5w", "CUTCK67EP", "oHtRHMsss"],
  Ye = "framer-lOWKr",
  He = {
    CUTCK67EP: "framer-v-1ez5dct",
    gqZ2V3s5w: "framer-v-1lelsdd",
    oHtRHMsss: "framer-v-1c9zgxn",
  };
function Ke(r, ...o) {
  let l = {};
  return o?.forEach((m) => m && Object.assign(l, r[m])), l;
}
var Ae = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Qe = ({ value: r, children: o }) => {
    let l = he(ee),
      m = r ?? l.transition,
      c = ge(() => ({ ...l, transition: m }), [JSON.stringify(m)]);
    return e(ee.Provider, { value: c, children: o });
  },
  Ue = p(a),
  Je = {
    "Variant 1": "gqZ2V3s5w",
    "Variant 2": "CUTCK67EP",
    "Variant 3": "oHtRHMsss",
  },
  Ze = ({ height: r, id: o, width: l, ...m }) => {
    var c, u;
    return {
      ...m,
      variant:
        (u = (c = Je[m.variant]) !== null && c !== void 0 ? c : m.variant) !==
          null && u !== void 0
          ? u
          : "gqZ2V3s5w",
    };
  },
  $e = (r, o) =>
    r.layoutDependency ? o.join("-") + r.layoutDependency : o.join("-"),
  er = R(function (r, o) {
    let { activeLocale: l, setLocale: m } = G(),
      { style: c, className: u, layoutId: b, variant: S, ...U } = Ze(r),
      {
        baseVariant: t,
        classNames: fe,
        clearLoadingGesture: ze,
        gestureHandlers: J,
        gestureVariant: Z,
        isLoading: pe,
        setGestureState: $,
        setVariant: _,
        variants: B,
      } = Fe({
        cycleOrder: qe,
        defaultVariant: "gqZ2V3s5w",
        variant: S,
        variantClassNames: He,
      }),
      f = $e(r, B),
      { activeVariantCallback: h, delay: w } = ve(t),
      C = h(async (...de) => {
        await w(() => _("CUTCK67EP"), 2e3);
      }),
      M = h(async (...de) => {
        await w(() => _("oHtRHMsss"), 2e3);
      }),
      z = h(async (...de) => {
        await w(() => _("gqZ2V3s5w"), 2e3);
      });
    ke(t, { CUTCK67EP: M, default: C, oHtRHMsss: z });
    let Re = L(null),
      Ee = E(),
      Xe = [],
      y = ue();
    return e(T, {
      id: b ?? Ee,
      children: e(Ue, {
        animate: B,
        initial: !1,
        children: e(Qe, {
          value: Ae,
          children: i(p.div, {
            ...U,
            ...J,
            className: O(Ye, ...Xe, "framer-1lelsdd", u, fe),
            "data-framer-name": "Variant 1",
            "data-highlight": !0,
            layoutDependency: f,
            layoutId: "gqZ2V3s5w",
            ref: o ?? Re,
            style: { ...c },
            ...Ke(
              {
                CUTCK67EP: { "data-framer-name": "Variant 2" },
                oHtRHMsss: { "data-framer-name": "Variant 3" },
              },
              t,
              Z
            ),
            children: [
              i(p.div, {
                className: "framer-8i1s1c",
                layoutDependency: f,
                layoutId: "xDhLgHo8l",
                children: [
                  i(p.div, {
                    className: "framer-dg6ysr",
                    "data-border": !0,
                    "data-framer-name": "Pointer",
                    layoutDependency: f,
                    layoutId: "QRwB0UKrg",
                    style: {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-fbddc400-0ee3-43ee-ba54-6d4b8fa32af1, rgb(29, 30, 38))",
                      "--border-left-width": "0.5px",
                      "--border-right-width": "0.5px",
                      "--border-style": "solid",
                      "--border-top-width": "0px",
                    },
                    children: [
                      e(d, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 578,
                          intrinsicWidth: 578,
                          pixelHeight: 578,
                          pixelWidth: 578,
                          sizes: `calc(${y?.width || "100vw"} * 0.78)`,
                          src: "https://framerusercontent.com/images/zoD9TFijueFVPxACseUURjkPcS0.png",
                          srcSet:
                            "https://framerusercontent.com/images/zoD9TFijueFVPxACseUURjkPcS0.png?scale-down-to=512 512w,https://framerusercontent.com/images/zoD9TFijueFVPxACseUURjkPcS0.png 578w",
                        },
                        className: "framer-1rr1tnr",
                        "data-framer-name": "image",
                        layoutDependency: f,
                        layoutId: "G5wSEwjvQ",
                      }),
                      e(s, {
                        __fromCanvasComponent: !0,
                        children: e(a, {
                          children: e(p.p, {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                              "--framer-font-family":
                                '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                              "--framer-font-size": "19px",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            },
                            children:
                              "Fast, Supersonic Mach moves money at lightning speed",
                          }),
                        }),
                        className: "framer-1paedee",
                        "data-framer-name":
                          "Secure, Fortified protection for safe multichain transactions",
                        fonts: ["CUSTOM;SF Pro Display Semibold"],
                        layoutDependency: f,
                        layoutId: "zMzO4kzsf",
                        style: {
                          "--extracted-r6o4lv": "rgb(255, 255, 255)",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "center",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                  i(p.div, {
                    className: "framer-c806ei",
                    "data-border": !0,
                    "data-framer-name": "Pointer",
                    layoutDependency: f,
                    layoutId: "ETh7xKqZc",
                    style: {
                      "--border-bottom-width": "0px",
                      "--border-color":
                        "var(--token-fbddc400-0ee3-43ee-ba54-6d4b8fa32af1, rgb(29, 30, 38))",
                      "--border-left-width": "0.5px",
                      "--border-right-width": "0.5px",
                      "--border-style": "solid",
                      "--border-top-width": "0px",
                    },
                    variants: { CUTCK67EP: { "--border-bottom-width": "1px" } },
                    children: [
                      e(d, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 525,
                          intrinsicWidth: 467,
                          pixelHeight: 525,
                          pixelWidth: 467,
                          sizes: `calc(${y?.width || "100vw"} * 0.69)`,
                          src: "https://framerusercontent.com/images/dNILKEkc0izmGVg1ZSiOlvzruU.png",
                          srcSet:
                            "https://framerusercontent.com/images/dNILKEkc0izmGVg1ZSiOlvzruU.png 467w",
                        },
                        className: "framer-mt0anb",
                        "data-framer-name": "image",
                        layoutDependency: f,
                        layoutId: "TIHlMnHcb",
                      }),
                      e(s, {
                        __fromCanvasComponent: !0,
                        children: e(a, {
                          children: e(p.p, {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                              "--framer-font-family":
                                '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                              "--framer-font-size": "19px",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            },
                            children:
                              "Secure, Fortified protection for safe multichain transactions",
                          }),
                        }),
                        className: "framer-1x4habu",
                        "data-framer-name":
                          "Secure, Fortified protection for safe multichain transactions",
                        fonts: ["CUSTOM;SF Pro Display Semibold"],
                        layoutDependency: f,
                        layoutId: "bcnwm0Qt8",
                        style: {
                          "--extracted-r6o4lv": "rgb(255, 255, 255)",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "center",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                  i(p.div, {
                    className: "framer-9gjy2f",
                    "data-border": !0,
                    "data-framer-name": "Pointer",
                    layoutDependency: f,
                    layoutId: "BjIjGcKhl",
                    style: {
                      "--border-bottom-width": "0px",
                      "--border-color":
                        "var(--token-fbddc400-0ee3-43ee-ba54-6d4b8fa32af1, rgb(29, 30, 38))",
                      "--border-left-width": "0.5px",
                      "--border-right-width": "0.5px",
                      "--border-style": "solid",
                      "--border-top-width": "0px",
                    },
                    variants: { oHtRHMsss: { "--border-bottom-width": "1px" } },
                    children: [
                      e(d, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 514,
                          intrinsicWidth: 514,
                          pixelHeight: 514,
                          pixelWidth: 514,
                          sizes: `calc(${y?.width || "100vw"} * 0.7695)`,
                          src: "https://framerusercontent.com/images/vIhzCRdWCZOTnPV7XqPeg21mDk.png",
                          srcSet:
                            "https://framerusercontent.com/images/vIhzCRdWCZOTnPV7XqPeg21mDk.png?scale-down-to=512 512w,https://framerusercontent.com/images/vIhzCRdWCZOTnPV7XqPeg21mDk.png 514w",
                        },
                        className: "framer-15p33i7",
                        "data-framer-name": "image",
                        layoutDependency: f,
                        layoutId: "vRtlNqTgA",
                      }),
                      e(s, {
                        __fromCanvasComponent: !0,
                        children: e(a, {
                          children: e(p.p, {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                              "--framer-font-family":
                                '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                              "--framer-font-size": "19px",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            },
                            children:
                              "Cheap, Cost-Effective trading with minimal Fees",
                          }),
                        }),
                        className: "framer-hltauj",
                        "data-framer-name":
                          "Secure, Fortified protection for safe multichain transactions",
                        fonts: ["CUSTOM;SF Pro Display Semibold"],
                        layoutDependency: f,
                        layoutId: "nV_6te2vr",
                        style: {
                          "--extracted-r6o4lv": "rgb(255, 255, 255)",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "center",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                ],
              }),
              i(p.div, {
                className: "framer-1nqytsv",
                "data-framer-name": "Pointer-Nav",
                layoutDependency: f,
                layoutId: "qydObF_yh",
                children: [
                  e(p.div, {
                    className: "framer-10zdoxv",
                    "data-framer-name": "Pointer-Nav-Dot",
                    layoutDependency: f,
                    layoutId: "Paw32hG4z",
                    style: {
                      backgroundColor: "rgb(255, 255, 255)",
                      borderBottomLeftRadius: 500,
                      borderBottomRightRadius: 500,
                      borderTopLeftRadius: 500,
                      borderTopRightRadius: 500,
                      opacity: 1,
                    },
                    variants: {
                      CUTCK67EP: { opacity: 0.4 },
                      oHtRHMsss: { opacity: 0.4 },
                    },
                  }),
                  e(p.div, {
                    className: "framer-vtkmca",
                    "data-framer-name": "Pointer-Nav-Dot",
                    layoutDependency: f,
                    layoutId: "Dz4x62E1t",
                    style: {
                      backgroundColor: "rgb(255, 255, 255)",
                      borderBottomLeftRadius: 500,
                      borderBottomRightRadius: 500,
                      borderTopLeftRadius: 500,
                      borderTopRightRadius: 500,
                      opacity: 0.4,
                    },
                    variants: { CUTCK67EP: { opacity: 1 } },
                  }),
                  e(p.div, {
                    className: "framer-tzykl1",
                    "data-framer-name": "Pointer-Nav-Dot",
                    layoutDependency: f,
                    layoutId: "Ex46r2Arz",
                    style: {
                      backgroundColor: "rgb(255, 255, 255)",
                      borderBottomLeftRadius: 500,
                      borderBottomRightRadius: 500,
                      borderTopLeftRadius: 500,
                      borderTopRightRadius: 500,
                      opacity: 0.4,
                    },
                    variants: { oHtRHMsss: { opacity: 1 } },
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  rr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-lOWKr.framer-15p6cft, .framer-lOWKr .framer-15p6cft { display: block; }",
    ".framer-lOWKr.framer-1lelsdd { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 243px; }",
    ".framer-lOWKr .framer-8i1s1c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-lOWKr .framer-dg6ysr, .framer-lOWKr .framer-c806ei, .framer-lOWKr .framer-9gjy2f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 0px 32px 0px; position: relative; width: 100%; }",
    ".framer-lOWKr .framer-1rr1tnr { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 190px); overflow: visible; position: relative; width: 78%; }",
    ".framer-lOWKr .framer-1paedee, .framer-lOWKr .framer-1x4habu, .framer-lOWKr .framer-hltauj { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 90%; word-break: break-word; word-wrap: break-word; }",
    ".framer-lOWKr .framer-mt0anb { aspect-ratio: 0.8895238095238095 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 188px); overflow: visible; position: relative; width: 69%; }",
    ".framer-lOWKr .framer-15p33i7 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 187px); overflow: visible; position: relative; width: 77%; }",
    ".framer-lOWKr .framer-1nqytsv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-lOWKr .framer-10zdoxv, .framer-lOWKr .framer-vtkmca, .framer-lOWKr .framer-tzykl1 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: hidden; position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-lOWKr.framer-1lelsdd, .framer-lOWKr .framer-8i1s1c, .framer-lOWKr .framer-dg6ysr, .framer-lOWKr .framer-c806ei, .framer-lOWKr .framer-9gjy2f, .framer-lOWKr .framer-1nqytsv { gap: 0px; } .framer-lOWKr.framer-1lelsdd > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-lOWKr.framer-1lelsdd > :first-child, .framer-lOWKr .framer-dg6ysr > :first-child, .framer-lOWKr .framer-c806ei > :first-child, .framer-lOWKr .framer-9gjy2f > :first-child { margin-top: 0px; } .framer-lOWKr.framer-1lelsdd > :last-child, .framer-lOWKr .framer-dg6ysr > :last-child, .framer-lOWKr .framer-c806ei > :last-child, .framer-lOWKr .framer-9gjy2f > :last-child { margin-bottom: 0px; } .framer-lOWKr .framer-8i1s1c > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-lOWKr .framer-8i1s1c > :first-child, .framer-lOWKr .framer-1nqytsv > :first-child { margin-left: 0px; } .framer-lOWKr .framer-8i1s1c > :last-child, .framer-lOWKr .framer-1nqytsv > :last-child { margin-right: 0px; } .framer-lOWKr .framer-dg6ysr > *, .framer-lOWKr .framer-c806ei > *, .framer-lOWKr .framer-9gjy2f > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-lOWKr .framer-1nqytsv > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } }",
    ".framer-lOWKr.framer-v-1ez5dct .framer-8i1s1c { justify-content: center; }",
    ".framer-lOWKr.framer-v-1c9zgxn .framer-8i1s1c { justify-content: flex-end; }",
    '.framer-lOWKr[data-border="true"]::after, .framer-lOWKr [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  V = Y(er, rr, "framer-lOWKr"),
  le = V;
V.displayName = "Feature-Pointer";
V.defaultProps = { height: 388, width: 243 };
q(V, {
  variant: {
    options: ["gqZ2V3s5w", "CUTCK67EP", "oHtRHMsss"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3"],
    title: "Variant",
    type: g.Enum,
  },
});
K(
  V,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "SF Pro Display Semibold",
          source: "custom",
          url: "https://framerusercontent.com/assets/23WE8KgQxTKm5ZTqhpfUcgupWU.woff2",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ar = W(ne),
  tr = W(oe),
  ir = W(k),
  Ne = ie(s),
  nr = ie(p.a),
  I = ae(d),
  or = W(le),
  me = ae(p.div),
  sr = W(se),
  lr = {
    a1cksawgu: "(max-width: 809px)",
    Gj5T_eWxn: "(min-width: 810px) and (max-width: 1439px)",
    WQLkyLRf1: "(min-width: 1440px)",
  },
  Pe = () => typeof document < "u",
  De = "framer-Liicw",
  mr = {
    a1cksawgu: "framer-v-1f1jwql",
    Gj5T_eWxn: "framer-v-x52t79",
    WQLkyLRf1: "framer-v-72rtr7",
  },
  cr = (r, o) => `translateX(-50%) ${o}`,
  fr = { delay: 0, duration: 0.5, ease: [0.5, 0, 0.88, 0.77], type: "tween" },
  pr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: fr,
    x: 0,
    y: 0,
  },
  dr = {
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
  hr = { delay: 0.2, duration: 0.5, ease: [0.5, 0, 0.88, 0.77], type: "tween" },
  wr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: hr,
    x: 0,
    y: 0,
  },
  We = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 64,
  },
  gr = { delay: 0.5, duration: 0.3, ease: [0.5, 0, 0.88, 0.77], type: "tween" },
  xr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: gr,
    x: 0,
    y: 0,
  },
  ur = {
    delay: 0.75,
    duration: 0.3,
    ease: [0.5, 0, 0.88, 0.77],
    type: "tween",
  },
  br = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ur,
    x: 0,
    y: 0,
  },
  yr = {
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
  F = {
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
  j = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Ie = {
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
  Oe = { damping: 30, delay: 0.2, mass: 1, stiffness: 400, type: "spring" },
  vr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.5,
    skewX: 0,
    skewY: 0,
    transition: Oe,
    x: 0,
    y: 0,
  },
  Ve = { damping: 30, delay: 0.4, mass: 1, stiffness: 400, type: "spring" },
  Lr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.5,
    skewX: 0,
    skewY: 0,
    transition: Ve,
    x: 0,
    y: 0,
  },
  kr = (r, o) => `translateY(-50%) ${o}`,
  Fr = { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 },
  Sr = { damping: 40, delay: 0.05, mass: 1, stiffness: 400, type: "spring" },
  je = {
    effect: Fr,
    repeat: !1,
    startDelay: 0,
    threshold: 0,
    tokenization: "word",
    transition: Sr,
    trigger: "onInView",
    type: "appear",
  },
  Me = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 150,
  },
  Be = { delay: 0, duration: 0.1, ease: [0.5, 0, 0.88, 0.77], type: "tween" },
  _r = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Be,
    x: 0,
    y: 150,
  },
  Ce = { delay: 0, duration: 0.2, ease: [0.5, 0, 0.88, 0.77], type: "tween" },
  Nr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ce,
    x: 0,
    y: 150,
  },
  ce = A(),
  Pr = { Desktop: "WQLkyLRf1", Phone: "a1cksawgu", Tablet: "Gj5T_eWxn" },
  Dr = ({ height: r, id: o, width: l, ...m }) => {
    var c, u;
    return {
      ...m,
      variant:
        (u = (c = Pr[m.variant]) !== null && c !== void 0 ? c : m.variant) !==
          null && u !== void 0
          ? u
          : "WQLkyLRf1",
    };
  },
  Wr = R(function (r, o) {
    let { activeLocale: l, setLocale: m } = G(),
      { style: c, className: u, layoutId: b, variant: S, ...U } = Dr(r);
    v(() => {
      let h = A(void 0, l);
      if (h.robots) {
        let w = document.querySelector('meta[name="robots"]');
        w
          ? w.setAttribute("content", h.robots)
          : ((w = document.createElement("meta")),
            w.setAttribute("name", "robots"),
            w.setAttribute("content", h.robots),
            document.head.appendChild(w));
      }
    }, [void 0, l]),
      we(() => {
        let h = A(void 0, l);
        if (((document.title = h.title || ""), h.viewport)) {
          var w;
          (w = document.querySelector('meta[name="viewport"]')) === null ||
            w === void 0 ||
            w.setAttribute("content", h.viewport);
        }
        let C = h.bodyClassName;
        if (C) {
          let M = document.body;
          M.classList.forEach(
            (z) => z.startsWith("framer-body-") && M.classList.remove(z)
          ),
            M.classList.add(`${h.bodyClassName}-framer-Liicw`);
        }
        return () => {
          C &&
            document.body.classList.remove(`${h.bodyClassName}-framer-Liicw`);
        };
      }, [void 0, l]);
    let [t, fe] = Le(S, lr, !1),
      ze = void 0,
      J = L(null),
      Z = xe("w92VsWnaq"),
      pe = L(null),
      $ = () => (Pe() ? t !== "a1cksawgu" : !0),
      _ = () => !Pe() || t === "a1cksawgu",
      B = E(),
      f = [];
    return (
      be({}),
      e(ye.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: mr },
        children: i(T, {
          id: b ?? B,
          children: [
            i(p.div, {
              ...U,
              className: O(De, ...f, "framer-72rtr7", u),
              ref: o ?? J,
              style: { ...c },
              children: [
                e(P, {
                  children: e(D, {
                    className: "framer-kje9mg-container",
                    children: e(ne, {
                      height: "100%",
                      id: "ED2pMJPuP",
                      intensity: 10,
                      layoutId: "ED2pMJPuP",
                      width: "100%",
                    }),
                  }),
                }),
                e(P, {
                  height: 63,
                  width: "90vw",
                  y: 24,
                  children: e(D, {
                    animate: pr,
                    className: "framer-19of1dg-container",
                    "data-framer-appear-id": "19of1dg",
                    initial: dr,
                    layoutScroll: !0,
                    optimized: !0,
                    transformTemplate: cr,
                    children: e(n, {
                      breakpoint: t,
                      overrides: {
                        a1cksawgu: { variant: "tIxhHMA9M" },
                        Gj5T_eWxn: { variant: "yfSXmMvM8" },
                      },
                      children: e(oe, {
                        height: "100%",
                        id: "zXRRn5Gbm",
                        layoutId: "zXRRn5Gbm",
                        style: { width: "100%" },
                        variant: "cjtTkIAp1",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                i("div", {
                  className: "framer-1thes0l",
                  "data-framer-name": "Hero-Section",
                  name: "Hero-Section",
                  children: [
                    i("div", {
                      className: "framer-100likj",
                      "data-framer-name": "Gradient-Shapes",
                      name: "Gradient-Shapes",
                      children: [
                        e(H, {
                          className: "framer-kis4t2",
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
                        e(H, {
                          className: "framer-4aytbw",
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
                        e(H, {
                          className: "framer-10viiv1",
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
                        e(P, {
                          children: e(n, {
                            breakpoint: t,
                            overrides: {
                              a1cksawgu: { style: {} },
                              Gj5T_eWxn: { style: { rotate: -23 } },
                            },
                            children: e(D, {
                              className: "framer-j65g9c-container",
                              id: Z,
                              ref: pe,
                              style: { rotate: -24 },
                              children: e(k, {
                                autoplay: !0,
                                background: "rgba(0, 85, 255, 0)",
                                controls: !1,
                                direction: "1",
                                height: "100%",
                                hover: !1,
                                id: "w92VsWnaq",
                                layoutId: "w92VsWnaq",
                                loop: !0,
                                progress: 4,
                                speed: 1,
                                srcFile:
                                  "https://framerusercontent.com/assets/hpdGhzQ0V7fVkUkPW87OSLn8Es.zip",
                                srcType: "file",
                                srcUrl:
                                  "https://lottie.host/d826e0a7-b7e8-4072-8afe-c943ed2dd2ca/DpX3m5yT5Z.lottie",
                                style: { height: "100%", width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                        e(n, {
                          breakpoint: t,
                          overrides: {
                            a1cksawgu: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: x(922.1960977935792),
                                pixelHeight: 1113,
                                pixelWidth: 1113,
                                sizes: "1183px",
                                src: "https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp?scale-down-to=512 512w,https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp 1113w",
                              },
                            },
                          },
                          children: e(d, {
                            background: {
                              alt: "",
                              fit: "fill",
                              pixelHeight: 1113,
                              pixelWidth: 1113,
                              sizes: "1183px",
                              src: "https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp",
                              srcSet:
                                "https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp?scale-down-to=512 512w,https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp 1113w",
                            },
                            className: "framer-1e40a43",
                            "data-framer-name": "Background+Blur",
                            name: "Background+Blur",
                          }),
                        }),
                        e(n, {
                          breakpoint: t,
                          overrides: {
                            a1cksawgu: {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: x(83),
                                pixelHeight: 1113,
                                pixelWidth: 1113,
                                sizes: "1132px",
                                src: "https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp?scale-down-to=512 512w,https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp 1113w",
                              },
                            },
                          },
                          children: e(d, {
                            background: {
                              alt: "",
                              fit: "fill",
                              pixelHeight: 1113,
                              pixelWidth: 1113,
                              sizes: "1132px",
                              src: "https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp",
                              srcSet:
                                "https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp?scale-down-to=512 512w,https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/Icf7txOqR6j8siIJxxepu5iLXRw.webp 1113w",
                            },
                            className: "framer-vmcflh",
                            "data-framer-name": "Background+Blur",
                            name: "Background+Blur",
                          }),
                        }),
                      ],
                    }),
                    i("div", {
                      className: "framer-1clz34a",
                      "data-framer-name": "Hero-Text",
                      name: "Hero-Text",
                      children: [
                        e(n, {
                          breakpoint: t,
                          overrides: {
                            a1cksawgu: {
                              children: i(a, {
                                children: [
                                  e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                      "--framer-font-family":
                                        '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      "--framer-font-size": "65px",
                                      "--framer-letter-spacing": "-2.06px",
                                      "--framer-line-height": "70.04px",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: "Any Coin. ",
                                  }),
                                  e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                      "--framer-font-family":
                                        '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      "--framer-font-size": "65px",
                                      "--framer-letter-spacing": "-2.06px",
                                      "--framer-line-height": "70.04px",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: "Any Chain.",
                                  }),
                                  e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                      "--framer-font-family":
                                        '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      "--framer-font-size": "65px",
                                      "--framer-letter-spacing": "-2.06px",
                                      "--framer-line-height": "70.04px",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: "One Click.",
                                  }),
                                ],
                              }),
                            },
                          },
                          children: e(Ne, {
                            __fromCanvasComponent: !0,
                            animate: wr,
                            children: i(a, {
                              children: [
                                e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                    "--framer-font-family":
                                      '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                    "--framer-font-size": "65px",
                                    "--framer-letter-spacing": "-2.06px",
                                    "--framer-line-height": "70.04px",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "Any Coin. Any Chain.",
                                }),
                                e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                    "--framer-font-family":
                                      '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                    "--framer-font-size": "65px",
                                    "--framer-letter-spacing": "-2.06px",
                                    "--framer-line-height": "70.04px",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "One Click.",
                                }),
                              ],
                            }),
                            className: "framer-re1p42",
                            "data-framer-appear-id": "re1p42",
                            "data-framer-name":
                              "Any Coin. Any Chain. One Click.",
                            fonts: ["CUSTOM;SF Pro Display Semibold"],
                            initial: We,
                            name: "Any Coin. Any Chain. One Click.",
                            optimized: !0,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(n, {
                          breakpoint: t,
                          overrides: {
                            a1cksawgu: {
                              children: e(a, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                                    "--framer-font-family":
                                      '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                    "--framer-font-size": "18px",
                                    "--framer-line-height": "28px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color":
                                      "rgba(255, 255, 255, 0.7)",
                                  },
                                  children: "No more layovers. ",
                                }),
                              }),
                            },
                            Gj5T_eWxn: {
                              children: e(a, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                                    "--framer-font-family":
                                      '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                    "--framer-font-size": "20px",
                                    "--framer-line-height": "28px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "rgba(255, 255, 255, 0.7)",
                                  },
                                  children: "No more layovers. ",
                                }),
                              }),
                            },
                          },
                          children: e(Ne, {
                            __fromCanvasComponent: !0,
                            animate: xr,
                            children: e(a, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                                  "--framer-font-family":
                                    '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                  "--framer-font-size": "24px",
                                  "--framer-line-height": "28px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "rgba(255, 255, 255, 0.7)",
                                },
                                children: "No more layovers. ",
                              }),
                            }),
                            className: "framer-rgu685",
                            "data-framer-appear-id": "rgu685",
                            "data-framer-name": "text",
                            fonts: ["CUSTOM;SF Pro Display Medium"],
                            initial: We,
                            name: "text",
                            optimized: !0,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(te, {
                          href: "https://fo-app-mach-exchange.vercel.app",
                          openInNewTab: !1,
                          children: e(nr, {
                            animate: br,
                            className: "framer-1yosa5u framer-lux5qc",
                            "data-framer-appear-id": "1yosa5u",
                            "data-framer-name": "Hero-CTA",
                            initial: yr,
                            name: "Hero-CTA",
                            optimized: !0,
                            children: e(s, {
                              __fromCanvasComponent: !0,
                              children: e(a, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                                    "--framer-font-family":
                                      '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                    "--framer-line-height": "22.84px",
                                    "--framer-text-color": "rgb(70, 70, 70)",
                                  },
                                  children: "Launch app",
                                }),
                              }),
                              className: "framer-xdv290",
                              "data-framer-name": "Launch app",
                              fonts: ["CUSTOM;SF Pro Display Bold"],
                              name: "Launch app",
                              verticalAlignment: "center",
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                      ],
                    }),
                    e("div", {
                      className: "framer-14plrrn",
                      "data-framer-name": "Rectangle 9",
                      name: "Rectangle 9",
                    }),
                  ],
                }),
                i("div", {
                  className: "framer-1luq0mm",
                  "data-framer-name": "Feature-Header",
                  name: "Feature-Header",
                  children: [
                    i("div", {
                      className: "framer-1vh3ri4",
                      "data-framer-name": "Feature-Header-Heading",
                      name: "Feature-Header-Heading",
                      children: [
                        i("div", {
                          className: "framer-i4rg05",
                          "data-framer-name": "Feature-Header-Subheading",
                          name: "Feature-Header-Subheading",
                          children: [
                            e("div", {
                              className: "framer-vepg9a",
                              "data-framer-name": "Background",
                              name: "Background",
                            }),
                            e(n, {
                              breakpoint: t,
                              overrides: {
                                Gj5T_eWxn: {
                                  children: e(a, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                        "--framer-font-family":
                                          '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-letter-spacing": "0px",
                                        "--framer-line-height": "21px",
                                        "--framer-text-color":
                                          "rgb(227, 228, 230)",
                                      },
                                      children: "Benefits",
                                    }),
                                  }),
                                },
                              },
                              children: e(s, {
                                __fromCanvasComponent: !0,
                                children: e(a, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                      "--framer-font-family":
                                        '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      "--framer-letter-spacing": "0px",
                                      "--framer-line-height": "21px",
                                      "--framer-text-color":
                                        "rgb(227, 228, 230)",
                                    },
                                    children: "Benefits",
                                  }),
                                }),
                                className: "framer-j8m0de",
                                "data-framer-name":
                                  "Workflows and integrations",
                                fonts: ["CUSTOM;SF Pro Display Semibold"],
                                name: "Workflows and integrations",
                                verticalAlignment: "center",
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        e(s, {
                          __fromCanvasComponent: !0,
                          children: e(a, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                "--framer-font-family":
                                  '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                "--framer-font-size": "56px",
                                "--framer-letter-spacing": "-1.82px",
                                "--framer-line-height": "62px",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: "Why Mach",
                            }),
                          }),
                          className: "framer-1awexek",
                          "data-framer-name": "Why Mach",
                          fonts: ["CUSTOM;SF Pro Display Semibold"],
                          name: "Why Mach",
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    e(n, {
                      breakpoint: t,
                      overrides: {
                        Gj5T_eWxn: {
                          children: e(a, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                                "--framer-font-family":
                                  '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                "--framer-line-height": "1.5em",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children:
                                "Mach is the global liquidity solution DeFi has long demanded. Our instant, chain-agnostic swaps allow users and dApps to expand across chains effortlessly, quickly, and cheaply.",
                            }),
                          }),
                        },
                      },
                      children: e(s, {
                        __fromCanvasComponent: !0,
                        children: e(a, {
                          children: e("p", {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                              "--framer-font-family":
                                '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                              "--framer-font-size": "20px",
                              "--framer-line-height": "1.5em",
                              "--framer-text-color": "rgb(255, 255, 255)",
                            },
                            children:
                              "Mach is the global liquidity solution DeFi has long demanded. Our instant, chain-agnostic swaps allow users and dApps to expand across chains effortlessly, quickly, and cheaply.",
                          }),
                        }),
                        className: "framer-6urcbo",
                        "data-framer-name": "text",
                        fonts: ["CUSTOM;SF Pro Display Medium"],
                        name: "text",
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
                i("div", {
                  className: "framer-1bzmaif",
                  "data-border": !0,
                  "data-framer-name": "Why-Pointer-Section",
                  name: "Why-Pointer-Section",
                  children: [
                    $() &&
                      i("div", {
                        className: "framer-16261wa hidden-1f1jwql",
                        "data-framer-name": "Why-Pointer-Container",
                        name: "Why-Pointer-Container",
                        children: [
                          i("div", {
                            className: "framer-112tq5g",
                            "data-border": !0,
                            "data-framer-name": "Pointer",
                            name: "Pointer",
                            children: [
                              e(n, {
                                breakpoint: t,
                                overrides: {
                                  Gj5T_eWxn: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 578,
                                      intrinsicWidth: 578,
                                      pixelHeight: 552,
                                      pixelWidth: 557,
                                      sizes:
                                        "calc(max((90vw - 276px) / 3, 1px) * 0.7654)",
                                      src: "https://framerusercontent.com/images/rU4DrgIPbeXkcHuHHX4m4aBWUh8.webp",
                                      srcSet:
                                        "https://framerusercontent.com/images/rU4DrgIPbeXkcHuHHX4m4aBWUh8.webp?scale-down-to=512 512w,https://framerusercontent.com/images/rU4DrgIPbeXkcHuHHX4m4aBWUh8.webp 557w",
                                    },
                                  },
                                },
                                children: e(I, {
                                  __framer__animate: { transition: j },
                                  __framer__animateOnce: !0,
                                  __framer__enter: F,
                                  __framer__exit: Ie,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 578,
                                    intrinsicWidth: 578,
                                    pixelHeight: 552,
                                    pixelWidth: 557,
                                    sizes:
                                      "calc(max((90vw - 276px) / 3, 1px) * 0.8102)",
                                    src: "https://framerusercontent.com/images/rU4DrgIPbeXkcHuHHX4m4aBWUh8.webp",
                                    srcSet:
                                      "https://framerusercontent.com/images/rU4DrgIPbeXkcHuHHX4m4aBWUh8.webp?scale-down-to=512 512w,https://framerusercontent.com/images/rU4DrgIPbeXkcHuHHX4m4aBWUh8.webp 557w",
                                  },
                                  className: "framer-1padygd",
                                  "data-framer-name": "image",
                                  name: "image",
                                }),
                              }),
                              e(n, {
                                breakpoint: t,
                                overrides: {
                                  Gj5T_eWxn: {
                                    children: e(a, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                          "--framer-font-family":
                                            '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                          "--framer-font-size": "14px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "We're fast. Median settlement times are 10 seconds and only getting faster.",
                                      }),
                                    }),
                                  },
                                },
                                children: e(s, {
                                  __fromCanvasComponent: !0,
                                  children: e(a, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                        "--framer-font-family":
                                          '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                        "--framer-font-size": "20px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children:
                                        "We're fast. Median settlement times are 10 seconds and only getting faster.",
                                    }),
                                  }),
                                  className: "framer-1ordy0r",
                                  "data-framer-name":
                                    "Fast, Supersonic Mach moves money at lightning speed",
                                  fonts: ["CUSTOM;SF Pro Display Semibold"],
                                  name: "Fast, Supersonic Mach moves money at lightning speed",
                                  verticalAlignment: "center",
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          i("div", {
                            className: "framer-fqra7z",
                            "data-border": !0,
                            "data-framer-name": "Pointer",
                            name: "Pointer",
                            children: [
                              e(n, {
                                breakpoint: t,
                                overrides: {
                                  Gj5T_eWxn: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 514,
                                      intrinsicWidth: 514,
                                      pixelHeight: 514,
                                      pixelWidth: 514,
                                      sizes:
                                        "calc(max((90vw - 276px) / 3, 1px) * 0.77)",
                                      src: "https://framerusercontent.com/images/DKGdwaTwfeseyWNcMLU8uXL99A.webp",
                                      srcSet:
                                        "https://framerusercontent.com/images/DKGdwaTwfeseyWNcMLU8uXL99A.webp?scale-down-to=512 512w,https://framerusercontent.com/images/DKGdwaTwfeseyWNcMLU8uXL99A.webp 514w",
                                    },
                                  },
                                },
                                children: e(I, {
                                  __framer__animate: { transition: Oe },
                                  __framer__animateOnce: !0,
                                  __framer__enter: F,
                                  __framer__exit: vr,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 514,
                                    intrinsicWidth: 514,
                                    pixelHeight: 514,
                                    pixelWidth: 514,
                                    sizes:
                                      "calc(max((90vw - 276px) / 3, 1px) * 0.8102)",
                                    src: "https://framerusercontent.com/images/DKGdwaTwfeseyWNcMLU8uXL99A.webp",
                                    srcSet:
                                      "https://framerusercontent.com/images/DKGdwaTwfeseyWNcMLU8uXL99A.webp?scale-down-to=512 512w,https://framerusercontent.com/images/DKGdwaTwfeseyWNcMLU8uXL99A.webp 514w",
                                  },
                                  className: "framer-fh7n3y",
                                  "data-framer-name": "image",
                                  name: "image",
                                }),
                              }),
                              e(n, {
                                breakpoint: t,
                                overrides: {
                                  Gj5T_eWxn: {
                                    children: e(a, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                          "--framer-font-family":
                                            '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                          "--framer-font-size": "14px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Secure, Fortified protection for safe multichain transactions",
                                      }),
                                    }),
                                  },
                                },
                                children: e(s, {
                                  __fromCanvasComponent: !0,
                                  children: e(a, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                        "--framer-font-family":
                                          '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                        "--framer-font-size": "20px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children:
                                        "We're cheap. We write just 512 bits onchain, which means the lowest fees around.",
                                    }),
                                  }),
                                  className: "framer-w57ea0",
                                  "data-framer-name":
                                    "Secure, Fortified protection for safe multichain transactions",
                                  fonts: ["CUSTOM;SF Pro Display Semibold"],
                                  name: "Secure, Fortified protection for safe multichain transactions",
                                  verticalAlignment: "center",
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          i("div", {
                            className: "framer-1g3gv92",
                            "data-border": !0,
                            "data-framer-name": "Pointer",
                            name: "Pointer",
                            children: [
                              e(n, {
                                breakpoint: t,
                                overrides: {
                                  Gj5T_eWxn: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 525,
                                      intrinsicWidth: 467,
                                      pixelHeight: 525,
                                      pixelWidth: 467,
                                      sizes:
                                        "calc(max((90vw - 276px) / 3, 1px) * 0.6831)",
                                      src: "https://framerusercontent.com/images/XLjBaKbP9owwetGwizDyA4rQ.webp",
                                      srcSet:
                                        "https://framerusercontent.com/images/XLjBaKbP9owwetGwizDyA4rQ.webp 467w",
                                    },
                                  },
                                },
                                children: e(I, {
                                  __framer__animate: { transition: Ve },
                                  __framer__animateOnce: !0,
                                  __framer__enter: F,
                                  __framer__exit: Lr,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 525,
                                    intrinsicWidth: 467,
                                    pixelHeight: 525,
                                    pixelWidth: 467,
                                    sizes:
                                      "calc(max((90vw - 276px) / 3, 1px) * 0.7211)",
                                    src: "https://framerusercontent.com/images/XLjBaKbP9owwetGwizDyA4rQ.webp",
                                    srcSet:
                                      "https://framerusercontent.com/images/XLjBaKbP9owwetGwizDyA4rQ.webp 467w",
                                  },
                                  className: "framer-1lu868x",
                                  "data-framer-name": "image",
                                  name: "image",
                                }),
                              }),
                              e(n, {
                                breakpoint: t,
                                overrides: {
                                  Gj5T_eWxn: {
                                    children: e(a, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                          "--framer-font-family":
                                            '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                          "--framer-font-size": "14px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "No layovers. We provide direct routes between any two assets, no matter what chain they're on.",
                                      }),
                                    }),
                                  },
                                },
                                children: e(s, {
                                  __fromCanvasComponent: !0,
                                  children: e(a, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                        "--framer-font-family":
                                          '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                        "--framer-font-size": "20px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children:
                                        "No layovers. We provide direct routes between any two assets, no matter what chain they're on.",
                                    }),
                                  }),
                                  className: "framer-1ygl0rt",
                                  "data-framer-name":
                                    "Cheap, Cost-Effective trading with minimal Fees",
                                  fonts: ["CUSTOM;SF Pro Display Semibold"],
                                  name: "Cheap, Cost-Effective trading with minimal Fees",
                                  verticalAlignment: "center",
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    e(n, {
                      breakpoint: t,
                      overrides: {
                        a1cksawgu: {
                          background: {
                            alt: "",
                            fit: "stretch",
                            loading: x(2167.196097793579),
                            pixelHeight: 1214,
                            pixelWidth: 1214,
                            positionX: "center",
                            positionY: "center",
                            sizes: "1553px",
                            src: "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp",
                            srcSet:
                              "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=512 512w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp 1214w",
                          },
                        },
                      },
                      children: e(d, {
                        background: {
                          alt: "",
                          fit: "stretch",
                          pixelHeight: 1214,
                          pixelWidth: 1214,
                          positionX: "center",
                          positionY: "center",
                          sizes: "1553px",
                          src: "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp",
                          srcSet:
                            "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=512 512w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp 1214w",
                        },
                        className: "framer-18j4dq0",
                        "data-framer-name": "Background+Blur",
                        name: "Background+Blur",
                      }),
                    }),
                    _() &&
                      e(n, {
                        breakpoint: t,
                        overrides: {
                          a1cksawgu: {
                            height: 388,
                            width: "100vw",
                            y: 2403.196097793579,
                          },
                        },
                        children: e(P, {
                          children: e(D, {
                            className:
                              "framer-uqkauj-container hidden-72rtr7 hidden-x52t79",
                            children: e(le, {
                              height: "100%",
                              id: "eFQKrCTIa",
                              layoutId: "eFQKrCTIa",
                              style: { width: "100%" },
                              variant: "gqZ2V3s5w",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                  ],
                }),
                i("div", {
                  className: "framer-oas3kw",
                  "data-framer-name": "Feature-Header",
                  name: "Feature-Header",
                  children: [
                    i("div", {
                      className: "framer-148bmpu",
                      "data-framer-name": "Feature-Header-Heading",
                      name: "Feature-Header-Heading",
                      children: [
                        i("div", {
                          className: "framer-yzr05r",
                          "data-framer-name": "Feature-Header-Subheading",
                          name: "Feature-Header-Subheading",
                          children: [
                            e("div", {
                              className: "framer-9mjwvh",
                              "data-framer-name": "Background",
                              name: "Background",
                            }),
                            e(n, {
                              breakpoint: t,
                              overrides: {
                                Gj5T_eWxn: {
                                  children: e(a, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                        "--framer-font-family":
                                          '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-letter-spacing": "0px",
                                        "--framer-line-height": "21px",
                                        "--framer-text-color":
                                          "rgb(227, 228, 230)",
                                      },
                                      children: "Features",
                                    }),
                                  }),
                                },
                              },
                              children: e(s, {
                                __fromCanvasComponent: !0,
                                children: e(a, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                      "--framer-font-family":
                                        '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      "--framer-letter-spacing": "0px",
                                      "--framer-line-height": "21px",
                                      "--framer-text-color":
                                        "rgb(227, 228, 230)",
                                    },
                                    children: "Features",
                                  }),
                                }),
                                className: "framer-w218fy",
                                "data-framer-name":
                                  "Workflows and integrations",
                                fonts: ["CUSTOM;SF Pro Display Semibold"],
                                name: "Workflows and integrations",
                                verticalAlignment: "center",
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        e(s, {
                          __fromCanvasComponent: !0,
                          children: i(a, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                  "--framer-font-family":
                                    '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                  "--framer-font-size": "56px",
                                  "--framer-letter-spacing": "-1.82px",
                                  "--framer-line-height": "62px",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: "Mach is built",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                  "--framer-font-family":
                                    '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                  "--framer-font-size": "56px",
                                  "--framer-letter-spacing": "-1.82px",
                                  "--framer-line-height": "62px",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: "different.",
                              }),
                            ],
                          }),
                          className: "framer-azun32",
                          "data-framer-name": "Why Mach",
                          fonts: ["CUSTOM;SF Pro Display Semibold"],
                          name: "Why Mach",
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    e(n, {
                      breakpoint: t,
                      overrides: {
                        a1cksawgu: {
                          children: e(a, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                                "--framer-font-family":
                                  '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children:
                                "It's time to leave pool-based models in the past. Our optimistic, intents-based framework is the first of its kind, and it breaks past the slow speeds and capital inefficiency of its predecessors.",
                            }),
                          }),
                        },
                        Gj5T_eWxn: {
                          children: e(a, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                                "--framer-font-family":
                                  '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children:
                                "It's time to leave pool-based models in the past. Our optimistic, intents-based framework is the first of its kind, and it breaks past the slow speeds and capital inefficiency of its predecessors.",
                            }),
                          }),
                        },
                      },
                      children: e(s, {
                        __fromCanvasComponent: !0,
                        children: e(a, {
                          children: e("p", {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                              "--framer-font-family":
                                '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                              "--framer-font-size": "20px",
                              "--framer-text-color": "rgb(255, 255, 255)",
                            },
                            children:
                              "It's time to leave pool-based models in the past. Our optimistic, intents-based framework is the first of its kind, and it breaks past the slow speeds and capital inefficiency of its predecessors.",
                          }),
                        }),
                        className: "framer-4qqxay",
                        "data-framer-name": "text",
                        fonts: ["CUSTOM;SF Pro Display Medium"],
                        name: "text",
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
                e(n, {
                  breakpoint: t,
                  overrides: { a1cksawgu: { "data-border": !0 } },
                  children: i("div", {
                    className: "framer-1vnifca",
                    "data-framer-name": "Feature-Wrapper",
                    name: "Feature-Wrapper",
                    children: [
                      i("div", {
                        className: "framer-1abql7h",
                        "data-border": !0,
                        "data-framer-name": "Feature-1",
                        name: "Feature-1",
                        children: [
                          e("div", {
                            className: "framer-1lvd3j5",
                            "data-border": !0,
                            "data-framer-name":
                              "Making-Money-Graphic-Container",
                            name: "Making-Money-Graphic-Container",
                            children: e(n, {
                              breakpoint: t,
                              overrides: {
                                a1cksawgu: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1924,
                                    intrinsicWidth: 1928,
                                    loading: x(3305.196097793579),
                                    pixelHeight: 1924,
                                    pixelWidth: 1928,
                                    sizes: "1px",
                                    src: "https://framerusercontent.com/images/RDXoQDxhwJnNvqSsxZ85tNtIr5o.webp",
                                    srcSet:
                                      "https://framerusercontent.com/images/RDXoQDxhwJnNvqSsxZ85tNtIr5o.webp?scale-down-to=512 512w,https://framerusercontent.com/images/RDXoQDxhwJnNvqSsxZ85tNtIr5o.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/RDXoQDxhwJnNvqSsxZ85tNtIr5o.webp 1928w",
                                  },
                                },
                              },
                              children: e(I, {
                                __framer__animate: { transition: j },
                                __framer__animateOnce: !0,
                                __framer__enter: F,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 1924,
                                  intrinsicWidth: 1928,
                                  pixelHeight: 1924,
                                  pixelWidth: 1928,
                                  sizes: "1px",
                                  src: "https://framerusercontent.com/images/RDXoQDxhwJnNvqSsxZ85tNtIr5o.webp",
                                  srcSet:
                                    "https://framerusercontent.com/images/RDXoQDxhwJnNvqSsxZ85tNtIr5o.webp?scale-down-to=512 512w,https://framerusercontent.com/images/RDXoQDxhwJnNvqSsxZ85tNtIr5o.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/RDXoQDxhwJnNvqSsxZ85tNtIr5o.webp 1928w",
                                },
                                className: "framer-15qa1rm",
                                "data-framer-name": "image",
                                name: "image",
                              }),
                            }),
                          }),
                          e("div", {
                            className: "framer-1tlrlgd",
                            children: i("div", {
                              className: "framer-1a0c1a9",
                              "data-framer-name": "Content",
                              name: "Content",
                              children: [
                                e(s, {
                                  __fromCanvasComponent: !0,
                                  children: e(a, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                        "--framer-font-family":
                                          '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                        "--framer-font-size": "28px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "Optimistic Escrow",
                                    }),
                                  }),
                                  className: "framer-1o59p12",
                                  "data-framer-name": "Making Money Modular",
                                  fonts: ["CUSTOM;SF Pro Display Semibold"],
                                  name: "Making Money Modular",
                                  verticalAlignment: "center",
                                  withExternalLayout: !0,
                                }),
                                e(n, {
                                  breakpoint: t,
                                  overrides: {
                                    a1cksawgu: {
                                      children: e(a, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                            "--framer-line-height": "24.5px",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.8)",
                                          },
                                          children:
                                            "Trades clear in seconds with our optimistic escrow system. Our open-source challenge system penalizes bad actors and seizes collateral for failed commitments.",
                                        }),
                                      }),
                                    },
                                    Gj5T_eWxn: {
                                      children: e(a, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                            "--framer-line-height": "24.5px",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.8)",
                                          },
                                          children:
                                            "Trades clear in seconds with our optimistic escrow system. Our open-source challenge system penalizes bad actors and seizes collateral for failed commitments.",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(s, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                          "--framer-font-size": "20px",
                                          "--framer-line-height": "24.5px",
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.8)",
                                        },
                                        children:
                                          "Trades clear in seconds with our optimistic escrow system. Our open-source challenge system penalizes bad actors and seizes collateral for failed commitments.",
                                      }),
                                    }),
                                    className: "framer-9w94gi",
                                    "data-framer-name":
                                      "We're here for developers, too. Mach is like Stripe, for the blockchain. L1's and Dapps that integrate Mach can onboard users from any asset on any chain in seconds.",
                                    fonts: ["CUSTOM;SF Pro Display Regular"],
                                    name: "We're here for developers, too. Mach is like Stripe, for the blockchain. L1's and Dapps that integrate Mach can onboard users from any asset on any chain in seconds.",
                                    verticalAlignment: "center",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      i("div", {
                        className: "framer-40enlf",
                        "data-border": !0,
                        "data-framer-name": "Feature-2",
                        name: "Feature-2",
                        children: [
                          e("div", {
                            className: "framer-1yuhe87",
                            children: i("div", {
                              className: "framer-1jw2l1o",
                              "data-framer-name": "Content",
                              name: "Content",
                              children: [
                                e(s, {
                                  __fromCanvasComponent: !0,
                                  children: e(a, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                        "--framer-font-family":
                                          '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                        "--framer-font-size": "28px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "No More Pool Parties",
                                    }),
                                  }),
                                  className: "framer-klvgqf",
                                  "data-framer-name": "Making Money Modular",
                                  fonts: ["CUSTOM;SF Pro Display Semibold"],
                                  name: "Making Money Modular",
                                  verticalAlignment: "center",
                                  withExternalLayout: !0,
                                }),
                                e(n, {
                                  breakpoint: t,
                                  overrides: {
                                    a1cksawgu: {
                                      children: e(a, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                            "--framer-line-height": "24.5px",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.8)",
                                          },
                                          children:
                                            "Liquidity pools in DeFi are risky, slow, and capital inefficient. We eliminated them entirely. Mach matches onchain demand to offchain supply, creating a safer DeFi ecosystem.",
                                        }),
                                      }),
                                    },
                                    Gj5T_eWxn: {
                                      children: e(a, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                            "--framer-line-height": "24.5px",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.8)",
                                          },
                                          children:
                                            "Liquidity pools in DeFi are risky, slow, and capital inefficient. We eliminated them entirely. Mach matches onchain demand to offchain supply, creating a safer DeFi ecosystem.",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(s, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                          "--framer-font-size": "20px",
                                          "--framer-line-height": "24.5px",
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.8)",
                                        },
                                        children:
                                          "Liquidity pools in DeFi are risky, slow, and capital inefficient. We eliminated them entirely. Mach matches onchain demand to offchain supply, creating a safer DeFi ecosystem.",
                                      }),
                                    }),
                                    className: "framer-1acj0z8",
                                    "data-framer-name":
                                      "We're here for developers, too. Mach is like Stripe, for the blockchain. L1's and Dapps that integrate Mach can onboard users from any asset on any chain in seconds.",
                                    fonts: ["CUSTOM;SF Pro Display Regular"],
                                    name: "We're here for developers, too. Mach is like Stripe, for the blockchain. L1's and Dapps that integrate Mach can onboard users from any asset on any chain in seconds.",
                                    verticalAlignment: "center",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          }),
                          e("div", {
                            className: "framer-hdm78c",
                            "data-border": !0,
                            "data-framer-name":
                              "Making-Money-Graphic-Container",
                            name: "Making-Money-Graphic-Container",
                            children: e(n, {
                              breakpoint: t,
                              overrides: {
                                a1cksawgu: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1925,
                                    intrinsicWidth: 2e3,
                                    loading: x(4317.69609779358),
                                    pixelHeight: 1925,
                                    pixelWidth: 2e3,
                                    sizes: "max(90vw, 1px)",
                                    src: "https://framerusercontent.com/images/2Pr5hYntrrNR9bKYmfKDvMhw10.webp",
                                    srcSet:
                                      "https://framerusercontent.com/images/2Pr5hYntrrNR9bKYmfKDvMhw10.webp?scale-down-to=512 512w,https://framerusercontent.com/images/2Pr5hYntrrNR9bKYmfKDvMhw10.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/2Pr5hYntrrNR9bKYmfKDvMhw10.webp 2000w",
                                  },
                                },
                              },
                              children: e(I, {
                                __framer__animate: { transition: j },
                                __framer__animateOnce: !0,
                                __framer__enter: F,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 1925,
                                  intrinsicWidth: 2e3,
                                  pixelHeight: 1925,
                                  pixelWidth: 2e3,
                                  sizes: "max(34.8611vw, 1px)",
                                  src: "https://framerusercontent.com/images/2Pr5hYntrrNR9bKYmfKDvMhw10.webp",
                                  srcSet:
                                    "https://framerusercontent.com/images/2Pr5hYntrrNR9bKYmfKDvMhw10.webp?scale-down-to=512 512w,https://framerusercontent.com/images/2Pr5hYntrrNR9bKYmfKDvMhw10.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/2Pr5hYntrrNR9bKYmfKDvMhw10.webp 2000w",
                                },
                                className: "framer-1laqnhv",
                                "data-framer-name": "image",
                                name: "image",
                              }),
                            }),
                          }),
                          e(n, {
                            breakpoint: t,
                            overrides: {
                              a1cksawgu: {
                                background: {
                                  alt: "",
                                  fit: "stretch",
                                  loading: x(3758.249882654137),
                                  pixelHeight: 1214,
                                  pixelWidth: 1214,
                                  positionX: "center",
                                  positionY: "center",
                                  sizes: "1401px",
                                  src: "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp",
                                  srcSet:
                                    "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=512 512w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp 1214w",
                                },
                              },
                            },
                            children: e(d, {
                              background: {
                                alt: "",
                                fit: "stretch",
                                pixelHeight: 1214,
                                pixelWidth: 1214,
                                positionX: "center",
                                positionY: "center",
                                sizes: "1401px",
                                src: "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=512 512w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp 1214w",
                              },
                              className: "framer-bonvbg",
                              "data-framer-name": "Background+Blur",
                              name: "Background+Blur",
                              transformTemplate: kr,
                            }),
                          }),
                        ],
                      }),
                      i("div", {
                        className: "framer-141tqqb",
                        "data-border": !0,
                        "data-framer-name": "Feature-3",
                        name: "Feature-3",
                        children: [
                          e("div", {
                            className: "framer-2yp6wx",
                            "data-border": !0,
                            "data-framer-name":
                              "Making-Money-Graphic-Container",
                            name: "Making-Money-Graphic-Container",
                            children: e(n, {
                              breakpoint: t,
                              overrides: {
                                a1cksawgu: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 795,
                                    intrinsicWidth: 776,
                                    loading: x(4700.69609779358),
                                    pixelHeight: 795,
                                    pixelWidth: 776,
                                    sizes: "calc(90vw - 64px)",
                                    src: "https://framerusercontent.com/images/gMQ2SKN9H0nUnIXKtfO0tC2VoVA.webp",
                                    srcSet:
                                      "https://framerusercontent.com/images/gMQ2SKN9H0nUnIXKtfO0tC2VoVA.webp 776w",
                                  },
                                },
                                Gj5T_eWxn: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 795,
                                    intrinsicWidth: 776,
                                    pixelHeight: 795,
                                    pixelWidth: 776,
                                    sizes: "calc(34.8611vw - 64px)",
                                    src: "https://framerusercontent.com/images/gMQ2SKN9H0nUnIXKtfO0tC2VoVA.webp",
                                    srcSet:
                                      "https://framerusercontent.com/images/gMQ2SKN9H0nUnIXKtfO0tC2VoVA.webp 776w",
                                  },
                                },
                              },
                              children: e(I, {
                                __framer__animate: { transition: j },
                                __framer__animateOnce: !0,
                                __framer__enter: F,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 795,
                                  intrinsicWidth: 776,
                                  pixelHeight: 795,
                                  pixelWidth: 776,
                                  sizes: "calc(34.8611vw - 116px)",
                                  src: "https://framerusercontent.com/images/gMQ2SKN9H0nUnIXKtfO0tC2VoVA.webp",
                                  srcSet:
                                    "https://framerusercontent.com/images/gMQ2SKN9H0nUnIXKtfO0tC2VoVA.webp 776w",
                                },
                                className: "framer-20gdlf",
                                "data-framer-name": "image",
                                name: "image",
                              }),
                            }),
                          }),
                          e("div", {
                            className: "framer-1rxpokk",
                            children: i("div", {
                              className: "framer-ou0a6d",
                              "data-framer-name": "Content",
                              name: "Content",
                              children: [
                                e(s, {
                                  __fromCanvasComponent: !0,
                                  children: e(a, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                        "--framer-font-family":
                                          '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                        "--framer-font-size": "28px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "Making Money Modular",
                                    }),
                                  }),
                                  className: "framer-1v22exc",
                                  "data-framer-name": "Making Money Modular",
                                  fonts: ["CUSTOM;SF Pro Display Semibold"],
                                  name: "Making Money Modular",
                                  verticalAlignment: "center",
                                  withExternalLayout: !0,
                                }),
                                e(n, {
                                  breakpoint: t,
                                  overrides: {
                                    a1cksawgu: {
                                      children: e(a, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                            "--framer-line-height": "24.5px",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.8)",
                                          },
                                          children:
                                            "We're here for developers, too. L1's and Dapps that integrate Mach can reach users from any asset on any chain in just seconds.",
                                        }),
                                      }),
                                    },
                                    Gj5T_eWxn: {
                                      children: e(a, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                            "--framer-line-height": "24.5px",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.8)",
                                          },
                                          children:
                                            "We're here for developers, too. L1's and Dapps that integrate Mach can reach users from any asset on any chain in just seconds.",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(s, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                          "--framer-font-size": "20px",
                                          "--framer-line-height": "24.5px",
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.8)",
                                        },
                                        children:
                                          "We're here for developers, too. L1's and Dapps that integrate Mach can reach users from any asset on any chain in just seconds.",
                                      }),
                                    }),
                                    className: "framer-qes7uv",
                                    "data-framer-name":
                                      "We're here for developers, too. Mach is like Stripe, for the blockchain. L1's and Dapps that integrate Mach can onboard users from any asset on any chain in seconds.",
                                    fonts: ["CUSTOM;SF Pro Display Regular"],
                                    name: "We're here for developers, too. Mach is like Stripe, for the blockchain. L1's and Dapps that integrate Mach can onboard users from any asset on any chain in seconds.",
                                    verticalAlignment: "center",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          }),
                          e(n, {
                            breakpoint: t,
                            overrides: {
                              a1cksawgu: {
                                background: {
                                  alt: "",
                                  fit: "stretch",
                                  loading: x(4996.19609779358),
                                  pixelHeight: 1214,
                                  pixelWidth: 1214,
                                  positionX: "center",
                                  positionY: "center",
                                  sizes: "1400px",
                                  src: "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp",
                                  srcSet:
                                    "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=512 512w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp 1214w",
                                },
                              },
                            },
                            children: e(d, {
                              background: {
                                alt: "",
                                fit: "stretch",
                                pixelHeight: 1214,
                                pixelWidth: 1214,
                                positionX: "center",
                                positionY: "center",
                                sizes: "1400px",
                                src: "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp",
                                srcSet:
                                  "https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=512 512w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/WdAci1SvSDtYOTexpVhjwmGXpz4.webp 1214w",
                              },
                              className: "framer-kf7ss5",
                              "data-framer-name": "Background+Blur",
                              name: "Background+Blur",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e("div", {
                  className: "framer-1u18w8",
                  "data-border": !0,
                  "data-framer-name": "Footer-App-Launch",
                  name: "Footer-App-Launch",
                  children: i("div", {
                    className: "framer-1jlfjsh",
                    "data-framer-name": "Footer-App-Launch-Container",
                    name: "Footer-App-Launch-Container",
                    children: [
                      e(n, {
                        breakpoint: t,
                        overrides: {
                          a1cksawgu: {
                            children: e(a, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                  "--framer-font-family":
                                    '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                  "--framer-font-size": "65px",
                                  "--framer-letter-spacing": "-3.19px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: "Ready to swap?",
                              }),
                            }),
                          },
                        },
                        children: e(s, {
                          __fromCanvasComponent: !0,
                          children: e(a, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IFNlbWlib2xk",
                                "--framer-font-family":
                                  '"SF Pro Display Semibold", "SF Pro Display Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                "--framer-font-size": "65px",
                                "--framer-letter-spacing": "-3.19px",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: "Ready to swap?",
                            }),
                          }),
                          className: "framer-5hawil",
                          "data-framer-name": "Ready to swap?",
                          effect: je,
                          fonts: ["CUSTOM;SF Pro Display Semibold"],
                          name: "Ready to swap?",
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                      e(me, {
                        __framer__animate: { transition: j },
                        __framer__animateOnce: !0,
                        __framer__enter: F,
                        __framer__exit: Ie,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-1bofohh",
                        "data-framer-name": "CTA_COntainer",
                        name: "CTA_COntainer",
                        children: e(te, {
                          href: "app.mach.exchange",
                          children: e("a", {
                            className: "framer-1aqz0jk framer-lux5qc",
                            "data-framer-name": "CTA",
                            name: "CTA",
                            children: e(s, {
                              __fromCanvasComponent: !0,
                              children: e(a, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                                    "--framer-font-family":
                                      '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                    "--framer-letter-spacing": "-0.01em",
                                    "--framer-line-height": "31px",
                                    "--framer-text-alignment": "center",
                                  },
                                  children: "Launch app",
                                }),
                              }),
                              className: "framer-1uopmo",
                              "data-framer-name": "Join waitlist",
                              fonts: ["CUSTOM;SF Pro Display Bold"],
                              name: "Join waitlist",
                              verticalAlignment: "center",
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                e(n, {
                  breakpoint: t,
                  overrides: { a1cksawgu: { y: 6623.812536149744 } },
                  children: e(P, {
                    height: 128,
                    width: "100vw",
                    children: e(D, {
                      className: "framer-uitgr3-container",
                      children: e(n, {
                        breakpoint: t,
                        overrides: {
                          a1cksawgu: { variant: "uKYbUZw9a" },
                          Gj5T_eWxn: { variant: "UUXNeV_D9" },
                        },
                        children: e(se, {
                          height: "100%",
                          id: "Imav6dxel",
                          layoutId: "Imav6dxel",
                          style: { width: "100%" },
                          variant: "lg5rA0IwE",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
            e("div", { className: O(De, ...f), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Ir = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${ce.bodyClassName}-framer-Liicw { background: rgb(3, 4, 13); }`,
    ".framer-Liicw.framer-lux5qc, .framer-Liicw .framer-lux5qc { display: block; }",
    ".framer-Liicw.framer-72rtr7 { align-content: center; align-items: center; background-color: #03040d; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1440px; }",
    ".framer-Liicw .framer-kje9mg-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-Liicw .framer-19of1dg-container { flex: none; height: auto; left: 50%; position: fixed; top: 24px; transform: translateX(-50%); width: 90%; z-index: 10; }",
    ".framer-Liicw .framer-1thes0l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-Liicw .framer-100likj { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }",
    ".framer-Liicw .framer-kis4t2 { flex: none; height: 962px; left: -522px; position: absolute; top: -485px; width: 1396px; }",
    ".framer-Liicw .framer-4aytbw { flex: none; height: 962px; left: -1042px; position: absolute; top: -484px; width: 1396px; }",
    ".framer-Liicw .framer-10viiv1 { flex: none; height: 962px; left: -653px; position: absolute; top: -813px; width: 1396px; }",
    ".framer-Liicw .framer-j65g9c-container { bottom: -120px; flex: none; height: 682px; position: absolute; right: -521px; width: 1844px; }",
    ".framer-Liicw .framer-1e40a43 { -webkit-filter: blur(0px); aspect-ratio: 1 / 1; bottom: -160px; filter: blur(0px); flex: none; height: var(--framer-aspect-ratio-supported, 1183px); left: -309px; opacity: 0.75; position: absolute; width: 1183px; }",
    ".framer-Liicw .framer-vmcflh { -webkit-filter: blur(0px); aspect-ratio: 1 / 1; bottom: -185px; filter: blur(0px); flex: none; opacity: 0.75; position: absolute; right: -269px; top: -147px; width: var(--framer-aspect-ratio-supported, 1132px); }",
    ".framer-Liicw .framer-1clz34a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 90%; z-index: 2; }",
    ".framer-Liicw .framer-re1p42, .framer-Liicw .framer-1o59p12, .framer-Liicw .framer-9w94gi, .framer-Liicw .framer-klvgqf, .framer-Liicw .framer-1acj0z8, .framer-Liicw .framer-1v22exc, .framer-Liicw .framer-qes7uv { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-Liicw .framer-rgu685, .framer-Liicw .framer-xdv290, .framer-Liicw .framer-1awexek, .framer-Liicw .framer-azun32, .framer-Liicw .framer-d1p7qw, .framer-Liicw .framer-5hawil, .framer-Liicw .framer-1uopmo { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-Liicw .framer-1yosa5u { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: visible; padding: 10.87804889678955px; position: relative; text-decoration: none; width: 117px; }",
    ".framer-Liicw .framer-14plrrn { background: linear-gradient(180deg, rgba(3, 4, 12, 0) 0%, rgba(3, 4, 12, 1) 100%); bottom: -18px; flex: none; height: 234px; left: 0px; position: absolute; width: 100%; z-index: 1; }",
    ".framer-Liicw .framer-1luq0mm { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 150px 0px 60px 0px; position: relative; width: 90%; z-index: 1; }",
    ".framer-Liicw .framer-1vh3ri4, .framer-Liicw .framer-148bmpu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 13px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-Liicw .framer-i4rg05, .framer-Liicw .framer-yzr05r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-Liicw .framer-vepg9a { background-color: #b59aff; border-bottom-left-radius: 9999px; border-bottom-right-radius: 9999px; border-top-left-radius: 9999px; border-top-right-radius: 9999px; flex: none; height: 8px; position: relative; width: 8px; }",
    ".framer-Liicw .framer-j8m0de, .framer-Liicw .framer-w218fy { --framer-paragraph-spacing: 0px; flex: none; height: 21px; position: relative; white-space: pre-wrap; width: 179px; word-break: break-word; word-wrap: break-word; }",
    ".framer-Liicw .framer-6urcbo { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 27%; word-break: break-word; word-wrap: break-word; }",
    ".framer-Liicw .framer-1bzmaif { --border-bottom-width: 1px; --border-color: var(--token-fbddc400-0ee3-43ee-ba54-6d4b8fa32af1, #1d1e26); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-Liicw .framer-16261wa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 90%; z-index: 1; }",
    ".framer-Liicw .framer-112tq5g { --border-bottom-width: 0px; --border-color: var(--token-fbddc400-0ee3-43ee-ba54-6d4b8fa32af1, #1d1e26); --border-left-width: 1px; --border-right-width: 0.5px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: auto; justify-content: flex-start; overflow: visible; padding: 52px 0px 52px 0px; position: relative; width: 1px; }",
    ".framer-Liicw .framer-1padygd, .framer-Liicw .framer-fh7n3y { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 350px); overflow: visible; position: relative; width: 81%; }",
    ".framer-Liicw .framer-1ordy0r, .framer-Liicw .framer-w57ea0, .framer-Liicw .framer-1ygl0rt { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 80%; word-break: break-word; word-wrap: break-word; }",
    ".framer-Liicw .framer-fqra7z { --border-bottom-width: 0px; --border-color: var(--token-fbddc400-0ee3-43ee-ba54-6d4b8fa32af1, #1d1e26); --border-left-width: 0.5px; --border-right-width: 0.5px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: auto; justify-content: flex-start; overflow: visible; padding: 52px 0px 52px 0px; position: relative; width: 1px; }",
    ".framer-Liicw .framer-1g3gv92 { --border-bottom-width: 0px; --border-color: var(--token-fbddc400-0ee3-43ee-ba54-6d4b8fa32af1, #1d1e26); --border-left-width: 0.5px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: min-content; justify-content: flex-start; overflow: visible; padding: 52px 0px 52px 0px; position: relative; width: 1px; }",
    ".framer-Liicw .framer-1lu868x { aspect-ratio: 0.89 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 350px); overflow: visible; position: relative; width: 72%; }",
    ".framer-Liicw .framer-18j4dq0 { -webkit-filter: blur(0px); aspect-ratio: 1 / 1; filter: blur(0px); flex: none; height: var(--framer-aspect-ratio-supported, 1553px); left: -777px; opacity: 0.45; position: absolute; top: -236px; width: 1553px; z-index: 0; }",
    ".framer-Liicw .framer-uqkauj-container, .framer-Liicw .framer-uitgr3-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-Liicw .framer-oas3kw { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 300px 0px 60px 0px; position: relative; width: 90%; z-index: 1; }",
    ".framer-Liicw .framer-9mjwvh { background-color: #f1ca4b; border-bottom-left-radius: 9999px; border-bottom-right-radius: 9999px; border-top-left-radius: 9999px; border-top-right-radius: 9999px; flex: none; height: 8px; position: relative; width: 8px; }",
    ".framer-Liicw .framer-4qqxay { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 40%; word-break: break-word; word-wrap: break-word; }",
    ".framer-Liicw .framer-1vnifca { align-content: center; align-items: center; background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-Liicw .framer-1abql7h { --border-bottom-width: 0.5px; --border-color: var(--token-fbddc400-0ee3-43ee-ba54-6d4b8fa32af1, #1d1e26); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-Liicw .framer-1lvd3j5 { --border-bottom-width: 0px; --border-color: var(--token-fbddc400-0ee3-43ee-ba54-6d4b8fa32af1, #1d1e26); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 502px); justify-content: center; overflow: hidden; padding: 18px; position: relative; width: 35%; }",
    ".framer-Liicw .framer-15qa1rm { aspect-ratio: 1.002079002079002 / 1; flex: none; height: 100%; overflow: visible; position: relative; width: var(--framer-aspect-ratio-supported, 467px); }",
    ".framer-Liicw .framer-1tlrlgd { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px 0px 0px 100px; position: relative; width: 1px; }",
    ".framer-Liicw .framer-1a0c1a9, .framer-Liicw .framer-1jw2l1o, .framer-Liicw .framer-ou0a6d { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 2018px; padding: 0px; position: relative; width: 65%; }",
    ".framer-Liicw .framer-40enlf { --border-bottom-width: 0.5px; --border-color: var(--token-fbddc400-0ee3-43ee-ba54-6d4b8fa32af1, #1d1e26); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0.5px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-Liicw .framer-1yuhe87 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px 0px 0px 150px; position: relative; width: 1px; z-index: 1; }",
    ".framer-Liicw .framer-hdm78c { --border-bottom-width: 0px; --border-color: var(--token-fbddc400-0ee3-43ee-ba54-6d4b8fa32af1, #1d1e26); --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 502px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 35%; z-index: 1; }",
    ".framer-Liicw .framer-1laqnhv { aspect-ratio: 1.0389610389610389 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 483px); overflow: visible; position: relative; width: 1px; }",
    ".framer-Liicw .framer-bonvbg { -webkit-filter: blur(0px); aspect-ratio: 1 / 1; filter: blur(0px); flex: none; height: var(--framer-aspect-ratio-supported, 1401px); left: -701px; overflow: visible; position: absolute; top: 50%; transform: translateY(-50%); width: 1401px; z-index: 0; }",
    ".framer-Liicw .framer-141tqqb { --border-bottom-width: 1px; --border-color: var(--token-fbddc400-0ee3-43ee-ba54-6d4b8fa32af1, #1d1e26); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0.5px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-Liicw .framer-2yp6wx { --border-bottom-width: 0px; --border-color: var(--token-fbddc400-0ee3-43ee-ba54-6d4b8fa32af1, #1d1e26); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 502px); justify-content: center; overflow: hidden; padding: 58px; position: relative; width: 35%; z-index: 1; }",
    ".framer-Liicw .framer-20gdlf { aspect-ratio: 0.9761006289308176 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 395px); overflow: visible; position: relative; width: 100%; }",
    ".framer-Liicw .framer-1rxpokk { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px 0px 0px 100px; position: relative; width: 1px; z-index: 1; }",
    ".framer-Liicw .framer-kf7ss5 { -webkit-filter: blur(0px); aspect-ratio: 1 / 1; bottom: -738px; filter: blur(0px); flex: none; height: var(--framer-aspect-ratio-supported, 1400px); overflow: hidden; position: absolute; right: -739px; width: 1400px; z-index: 0; }",
    ".framer-Liicw .framer-1fluoqo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 80px 0px 80px 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-Liicw .framer-zjio9n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-Liicw .framer-1swsib4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; min-height: 21px; min-width: 85px; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-Liicw .framer-fu0jkt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 28px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-Liicw .framer-i82rxn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 112px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 710px; }",
    ".framer-Liicw .framer-13nyobp { aspect-ratio: 1.9080459770114941 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 86px); overflow: hidden; position: relative; width: 23%; }",
    ".framer-Liicw .framer-exlh7r { aspect-ratio: 1.936842105263158 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 94px); overflow: hidden; position: relative; width: 26%; }",
    ".framer-Liicw .framer-72jffl { aspect-ratio: 1.896103896103896 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 71px); overflow: hidden; position: relative; width: 19%; }",
    ".framer-Liicw .framer-1svwp30 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 112px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 394px; }",
    ".framer-Liicw .framer-fbenc1 { aspect-ratio: 1.9012345679012346 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 81px); overflow: hidden; position: relative; width: 39%; }",
    ".framer-Liicw .framer-1xxsi2j { aspect-ratio: 1.9104477611940298 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 67px); overflow: hidden; position: relative; width: 32%; }",
    ".framer-Liicw .framer-upkpf2 { aspect-ratio: 1.9080459770114941 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 105px); overflow: hidden; position: relative; width: 43%; }",
    ".framer-Liicw .framer-1u18w8 { --border-bottom-width: 0px; --border-color: var(--token-fbddc400-0ee3-43ee-ba54-6d4b8fa32af1, #1d1e26); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background: linear-gradient(180deg, #03040c 0%, rgb(5, 7, 19) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 358px; justify-content: center; overflow: visible; padding: 10px 0px 10px 0px; position: relative; width: 100%; }",
    ".framer-Liicw .framer-1jlfjsh { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 30px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 10px; position: relative; width: 90%; }",
    ".framer-Liicw .framer-1bofohh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-Liicw .framer-1aqz0jk { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 10px; position: relative; text-decoration: none; width: min-content; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Liicw.framer-72rtr7, .framer-Liicw .framer-1thes0l, .framer-Liicw .framer-1clz34a, .framer-Liicw .framer-1yosa5u, .framer-Liicw .framer-1vh3ri4, .framer-Liicw .framer-i4rg05, .framer-Liicw .framer-1bzmaif, .framer-Liicw .framer-112tq5g, .framer-Liicw .framer-fqra7z, .framer-Liicw .framer-1g3gv92, .framer-Liicw .framer-148bmpu, .framer-Liicw .framer-yzr05r, .framer-Liicw .framer-1vnifca, .framer-Liicw .framer-1abql7h, .framer-Liicw .framer-1lvd3j5, .framer-Liicw .framer-1tlrlgd, .framer-Liicw .framer-1a0c1a9, .framer-Liicw .framer-40enlf, .framer-Liicw .framer-1yuhe87, .framer-Liicw .framer-1jw2l1o, .framer-Liicw .framer-hdm78c, .framer-Liicw .framer-141tqqb, .framer-Liicw .framer-2yp6wx, .framer-Liicw .framer-1rxpokk, .framer-Liicw .framer-ou0a6d, .framer-Liicw .framer-1fluoqo, .framer-Liicw .framer-zjio9n, .framer-Liicw .framer-1swsib4, .framer-Liicw .framer-fu0jkt, .framer-Liicw .framer-i82rxn, .framer-Liicw .framer-1svwp30, .framer-Liicw .framer-1u18w8, .framer-Liicw .framer-1jlfjsh, .framer-Liicw .framer-1bofohh, .framer-Liicw .framer-1aqz0jk { gap: 0px; } .framer-Liicw.framer-72rtr7 > *, .framer-Liicw .framer-1bzmaif > *, .framer-Liicw .framer-1vnifca > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Liicw.framer-72rtr7 > :first-child, .framer-Liicw .framer-1thes0l > :first-child, .framer-Liicw .framer-1clz34a > :first-child, .framer-Liicw .framer-1vh3ri4 > :first-child, .framer-Liicw .framer-1bzmaif > :first-child, .framer-Liicw .framer-112tq5g > :first-child, .framer-Liicw .framer-fqra7z > :first-child, .framer-Liicw .framer-1g3gv92 > :first-child, .framer-Liicw .framer-148bmpu > :first-child, .framer-Liicw .framer-1vnifca > :first-child, .framer-Liicw .framer-1tlrlgd > :first-child, .framer-Liicw .framer-1a0c1a9 > :first-child, .framer-Liicw .framer-1yuhe87 > :first-child, .framer-Liicw .framer-1jw2l1o > :first-child, .framer-Liicw .framer-1rxpokk > :first-child, .framer-Liicw .framer-ou0a6d > :first-child, .framer-Liicw .framer-1fluoqo > :first-child, .framer-Liicw .framer-zjio9n > :first-child, .framer-Liicw .framer-1u18w8 > :first-child, .framer-Liicw .framer-1jlfjsh > :first-child { margin-top: 0px; } .framer-Liicw.framer-72rtr7 > :last-child, .framer-Liicw .framer-1thes0l > :last-child, .framer-Liicw .framer-1clz34a > :last-child, .framer-Liicw .framer-1vh3ri4 > :last-child, .framer-Liicw .framer-1bzmaif > :last-child, .framer-Liicw .framer-112tq5g > :last-child, .framer-Liicw .framer-fqra7z > :last-child, .framer-Liicw .framer-1g3gv92 > :last-child, .framer-Liicw .framer-148bmpu > :last-child, .framer-Liicw .framer-1vnifca > :last-child, .framer-Liicw .framer-1tlrlgd > :last-child, .framer-Liicw .framer-1a0c1a9 > :last-child, .framer-Liicw .framer-1yuhe87 > :last-child, .framer-Liicw .framer-1jw2l1o > :last-child, .framer-Liicw .framer-1rxpokk > :last-child, .framer-Liicw .framer-ou0a6d > :last-child, .framer-Liicw .framer-1fluoqo > :last-child, .framer-Liicw .framer-zjio9n > :last-child, .framer-Liicw .framer-1u18w8 > :last-child, .framer-Liicw .framer-1jlfjsh > :last-child { margin-bottom: 0px; } .framer-Liicw .framer-1thes0l > *, .framer-Liicw .framer-1tlrlgd > *, .framer-Liicw .framer-1yuhe87 > *, .framer-Liicw .framer-1rxpokk > *, .framer-Liicw .framer-1u18w8 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Liicw .framer-1clz34a > * { margin: 0px; margin-bottom: calc(15px / 2); margin-top: calc(15px / 2); } .framer-Liicw .framer-1yosa5u > * { margin: 0px; margin-left: calc(13.59756088256836px / 2); margin-right: calc(13.59756088256836px / 2); } .framer-Liicw .framer-1yosa5u > :first-child, .framer-Liicw .framer-i4rg05 > :first-child, .framer-Liicw .framer-yzr05r > :first-child, .framer-Liicw .framer-1abql7h > :first-child, .framer-Liicw .framer-1lvd3j5 > :first-child, .framer-Liicw .framer-40enlf > :first-child, .framer-Liicw .framer-hdm78c > :first-child, .framer-Liicw .framer-141tqqb > :first-child, .framer-Liicw .framer-2yp6wx > :first-child, .framer-Liicw .framer-1swsib4 > :first-child, .framer-Liicw .framer-fu0jkt > :first-child, .framer-Liicw .framer-i82rxn > :first-child, .framer-Liicw .framer-1svwp30 > :first-child, .framer-Liicw .framer-1bofohh > :first-child, .framer-Liicw .framer-1aqz0jk > :first-child { margin-left: 0px; } .framer-Liicw .framer-1yosa5u > :last-child, .framer-Liicw .framer-i4rg05 > :last-child, .framer-Liicw .framer-yzr05r > :last-child, .framer-Liicw .framer-1abql7h > :last-child, .framer-Liicw .framer-1lvd3j5 > :last-child, .framer-Liicw .framer-40enlf > :last-child, .framer-Liicw .framer-hdm78c > :last-child, .framer-Liicw .framer-141tqqb > :last-child, .framer-Liicw .framer-2yp6wx > :last-child, .framer-Liicw .framer-1swsib4 > :last-child, .framer-Liicw .framer-fu0jkt > :last-child, .framer-Liicw .framer-i82rxn > :last-child, .framer-Liicw .framer-1svwp30 > :last-child, .framer-Liicw .framer-1bofohh > :last-child, .framer-Liicw .framer-1aqz0jk > :last-child { margin-right: 0px; } .framer-Liicw .framer-1vh3ri4 > *, .framer-Liicw .framer-148bmpu > * { margin: 0px; margin-bottom: calc(13px / 2); margin-top: calc(13px / 2); } .framer-Liicw .framer-i4rg05 > *, .framer-Liicw .framer-yzr05r > *, .framer-Liicw .framer-1swsib4 > *, .framer-Liicw .framer-1aqz0jk > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-Liicw .framer-112tq5g > *, .framer-Liicw .framer-fqra7z > *, .framer-Liicw .framer-1g3gv92 > * { margin: 0px; margin-bottom: calc(54px / 2); margin-top: calc(54px / 2); } .framer-Liicw .framer-1abql7h > *, .framer-Liicw .framer-40enlf > *, .framer-Liicw .framer-141tqqb > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-Liicw .framer-1lvd3j5 > *, .framer-Liicw .framer-hdm78c > *, .framer-Liicw .framer-2yp6wx > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Liicw .framer-1a0c1a9 > *, .framer-Liicw .framer-1jw2l1o > *, .framer-Liicw .framer-ou0a6d > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-Liicw .framer-1fluoqo > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-Liicw .framer-zjio9n > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-Liicw .framer-fu0jkt > * { margin: 0px; margin-left: calc(28px / 2); margin-right: calc(28px / 2); } .framer-Liicw .framer-i82rxn > *, .framer-Liicw .framer-1svwp30 > * { margin: 0px; margin-left: calc(112px / 2); margin-right: calc(112px / 2); } .framer-Liicw .framer-1jlfjsh > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-Liicw .framer-1bofohh > * { margin: 0px; margin-left: calc(11.830775260925293px / 2); margin-right: calc(11.830775260925293px / 2); } }",
    "@media (min-width: 1440px) { .framer-Liicw .hidden-72rtr7 { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1439px) { .framer-Liicw .hidden-x52t79 { display: none !important; } .${ce.bodyClassName}-framer-Liicw { background: rgb(3, 4, 13); } .framer-Liicw.framer-72rtr7 { width: 810px; } .framer-Liicw .framer-1thes0l { height: min-content; } .framer-Liicw .framer-j65g9c-container { bottom: unset; height: 667px; right: -442px; top: calc(51.09489051094893% - 667px / 2); width: 1037px; } .framer-Liicw .framer-vmcflh { width: var(--framer-aspect-ratio-supported, 1154px); } .framer-Liicw .framer-1clz34a { padding: 200px 0px 150px 0px; } .framer-Liicw .framer-14plrrn { background: linear-gradient(180deg, rgba(3, 4, 12, 0) 0%, rgba(3, 4, 12, 1) 34%); bottom: unset; height: 219px; left: unset; position: relative; } .framer-Liicw .framer-6urcbo { width: 40%; } .framer-Liicw .framer-112tq5g { gap: 36px; order: 0; padding: 32px 0px 32px 0px; } .framer-Liicw .framer-1padygd { height: var(--framer-aspect-ratio-supported, 186px); width: 77%; } .framer-Liicw .framer-1ordy0r, .framer-Liicw .framer-1ygl0rt, .framer-Liicw .framer-fu0jkt { width: 90%; } .framer-Liicw .framer-fqra7z { gap: 36px; order: 1; padding: 32px 0px 32px 0px; } .framer-Liicw .framer-fh7n3y { aspect-ratio: 1.0053475935828877 / 1; height: var(--framer-aspect-ratio-supported, 187px); order: 0; width: 77%; } .framer-Liicw .framer-w57ea0 { order: 1; width: 90%; } .framer-Liicw .framer-1g3gv92 { gap: 36px; order: 2; padding: 32px 0px 32px 0px; } .framer-Liicw .framer-1lu868x { height: var(--framer-aspect-ratio-supported, 187px); width: 68%; } .framer-Liicw .framer-oas3kw { padding: 150px 0px 60px 0px; } .framer-Liicw .framer-1lvd3j5, .framer-Liicw .framer-hdm78c { height: var(--framer-aspect-ratio-supported, 283px); } .framer-Liicw .framer-15qa1rm { width: var(--framer-aspect-ratio-supported, 247px); } .framer-Liicw .framer-1tlrlgd, .framer-Liicw .framer-1yuhe87, .framer-Liicw .framer-1rxpokk { align-content: center; align-items: center; padding: 0px; } .framer-Liicw .framer-1laqnhv { height: var(--framer-aspect-ratio-supported, 272px); } .framer-Liicw .framer-2yp6wx { height: var(--framer-aspect-ratio-supported, 282px); padding: 32px; } .framer-Liicw .framer-20gdlf { height: var(--framer-aspect-ratio-supported, 224px); } .framer-Liicw .framer-i82rxn, .framer-Liicw .framer-1svwp30 { gap: 54px; width: min-content; } .framer-Liicw .framer-13nyobp { aspect-ratio: unset; height: 87px; width: 166px; } .framer-Liicw .framer-exlh7r { aspect-ratio: unset; height: 95px; width: 184px; } .framer-Liicw .framer-72jffl { aspect-ratio: unset; height: 72px; width: 146px; } .framer-Liicw .framer-fbenc1 { aspect-ratio: unset; height: 81px; width: 154px; } .framer-Liicw .framer-1xxsi2j { aspect-ratio: unset; height: 67px; width: 128px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Liicw .framer-112tq5g, .framer-Liicw .framer-fqra7z, .framer-Liicw .framer-1g3gv92, .framer-Liicw .framer-i82rxn, .framer-Liicw .framer-1svwp30 { gap: 0px; } .framer-Liicw .framer-112tq5g > *, .framer-Liicw .framer-fqra7z > *, .framer-Liicw .framer-1g3gv92 > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-Liicw .framer-112tq5g > :first-child, .framer-Liicw .framer-fqra7z > :first-child, .framer-Liicw .framer-1g3gv92 > :first-child { margin-top: 0px; } .framer-Liicw .framer-112tq5g > :last-child, .framer-Liicw .framer-fqra7z > :last-child, .framer-Liicw .framer-1g3gv92 > :last-child { margin-bottom: 0px; } .framer-Liicw .framer-i82rxn > *, .framer-Liicw .framer-1svwp30 > * { margin: 0px; margin-left: calc(54px / 2); margin-right: calc(54px / 2); } .framer-Liicw .framer-i82rxn > :first-child, .framer-Liicw .framer-1svwp30 > :first-child { margin-left: 0px; } .framer-Liicw .framer-i82rxn > :last-child, .framer-Liicw .framer-1svwp30 > :last-child { margin-right: 0px; } }}`,
    `@media (max-width: 809px) { .framer-Liicw .hidden-1f1jwql { display: none !important; } .${ce.bodyClassName}-framer-Liicw { background: rgb(3, 4, 13); } .framer-Liicw.framer-72rtr7 { width: 390px; } .framer-Liicw .framer-1thes0l { height: min-content; overflow: visible; } .framer-Liicw .framer-100likj { bottom: -30px; top: 30px; } .framer-Liicw .framer-j65g9c-container { bottom: -248px; height: 627px; left: -256px; right: -251px; width: unset; } .framer-Liicw .framer-vmcflh { width: var(--framer-aspect-ratio-supported, 1095px); } .framer-Liicw .framer-1clz34a { padding: 200px 0px 250px 0px; } .framer-Liicw .framer-rgu685, .framer-Liicw .framer-5hawil { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-Liicw .framer-14plrrn { bottom: -119px; height: 28%; } .framer-Liicw .framer-1luq0mm { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 32px; justify-content: flex-start; } .framer-Liicw .framer-6urcbo, .framer-Liicw .framer-4qqxay { width: 100%; } .framer-Liicw .framer-1bzmaif { --border-bottom-width: 0px; } .framer-Liicw .framer-18j4dq0, .framer-Liicw .framer-bonvbg { order: 2; } .framer-Liicw .framer-uqkauj-container { order: 1; } .framer-Liicw .framer-oas3kw { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 32px; justify-content: flex-start; padding: 150px 0px 60px 0px; } .framer-Liicw .framer-1vnifca { --border-bottom-width: 0px; --border-color: var(--token-fbddc400-0ee3-43ee-ba54-6d4b8fa32af1, #1d1e26); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; } .framer-Liicw .framer-1abql7h, .framer-Liicw .framer-40enlf, .framer-Liicw .framer-141tqqb { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; flex-direction: column; } .framer-Liicw .framer-1lvd3j5 { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; height: var(--framer-aspect-ratio-supported, 351px); width: 90%; } .framer-Liicw .framer-15qa1rm { width: var(--framer-aspect-ratio-supported, 316px); } .framer-Liicw .framer-1tlrlgd { align-content: center; align-items: center; align-self: unset; flex: none; height: 278px; padding: 0px; width: 100%; } .framer-Liicw .framer-1a0c1a9, .framer-Liicw .framer-1jw2l1o, .framer-Liicw .framer-ou0a6d { width: 90%; } .framer-Liicw .framer-1yuhe87 { align-content: center; align-items: center; align-self: unset; flex: none; height: 278px; order: 1; padding: 0px; width: 100%; } .framer-Liicw .framer-hdm78c { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; height: var(--framer-aspect-ratio-supported, 351px); order: 0; width: 90%; } .framer-Liicw .framer-1laqnhv { height: var(--framer-aspect-ratio-supported, 338px); } .framer-Liicw .framer-2yp6wx { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; height: var(--framer-aspect-ratio-supported, 351px); padding: 32px; width: 90%; } .framer-Liicw .framer-20gdlf { height: var(--framer-aspect-ratio-supported, 294px); } .framer-Liicw .framer-1rxpokk { align-content: center; align-items: center; align-self: unset; flex: none; height: 309px; padding: 0px; width: 100%; } .framer-Liicw .framer-fu0jkt { flex-direction: column; width: 90%; } .framer-Liicw .framer-i82rxn { gap: 54px; order: 1; width: 100%; } .framer-Liicw .framer-exlh7r { height: var(--framer-aspect-ratio-supported, 68px); width: 132px; } .framer-Liicw .framer-72jffl { height: var(--framer-aspect-ratio-supported, 70px); width: 132px; } .framer-Liicw .framer-1svwp30 { gap: 54px; order: 2; width: 100%; } .framer-Liicw .framer-fbenc1 { height: var(--framer-aspect-ratio-supported, 72px); } .framer-Liicw .framer-1xxsi2j { height: var(--framer-aspect-ratio-supported, 60px); } .framer-Liicw .framer-upkpf2 { height: var(--framer-aspect-ratio-supported, 79px); order: 0; } .framer-Liicw .framer-1jlfjsh { justify-content: flex-start; } .framer-Liicw .framer-1aqz0jk { padding: 8px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Liicw .framer-1luq0mm, .framer-Liicw .framer-oas3kw, .framer-Liicw .framer-1abql7h, .framer-Liicw .framer-40enlf, .framer-Liicw .framer-141tqqb, .framer-Liicw .framer-fu0jkt, .framer-Liicw .framer-i82rxn, .framer-Liicw .framer-1svwp30 { gap: 0px; } .framer-Liicw .framer-1luq0mm > *, .framer-Liicw .framer-oas3kw > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-Liicw .framer-1luq0mm > :first-child, .framer-Liicw .framer-oas3kw > :first-child, .framer-Liicw .framer-1abql7h > :first-child, .framer-Liicw .framer-40enlf > :first-child, .framer-Liicw .framer-141tqqb > :first-child, .framer-Liicw .framer-fu0jkt > :first-child { margin-top: 0px; } .framer-Liicw .framer-1luq0mm > :last-child, .framer-Liicw .framer-oas3kw > :last-child, .framer-Liicw .framer-1abql7h > :last-child, .framer-Liicw .framer-40enlf > :last-child, .framer-Liicw .framer-141tqqb > :last-child, .framer-Liicw .framer-fu0jkt > :last-child { margin-bottom: 0px; } .framer-Liicw .framer-1abql7h > *, .framer-Liicw .framer-40enlf > *, .framer-Liicw .framer-141tqqb > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Liicw .framer-fu0jkt > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-Liicw .framer-i82rxn > *, .framer-Liicw .framer-1svwp30 > * { margin: 0px; margin-left: calc(54px / 2); margin-right: calc(54px / 2); } .framer-Liicw .framer-i82rxn > :first-child, .framer-Liicw .framer-1svwp30 > :first-child { margin-left: 0px; } .framer-Liicw .framer-i82rxn > :last-child, .framer-Liicw .framer-1svwp30 > :last-child { margin-right: 0px; } }}`,
    '.framer-Liicw[data-border="true"]::after, .framer-Liicw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Q = Y(Wr, Ir, "framer-Liicw"),
  Jr = Q;
Q.displayName = "Home";
Q.defaultProps = { height: 4787.5, width: 1440 };
K(
  Q,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "SF Pro Display Semibold",
          source: "custom",
          url: "https://framerusercontent.com/assets/23WE8KgQxTKm5ZTqhpfUcgupWU.woff2",
        },
        {
          family: "SF Pro Display Medium",
          source: "custom",
          url: "https://framerusercontent.com/assets/t3oAfXfUztEwRkUgp2RBWw8zPg.woff2",
        },
        {
          family: "SF Pro Display Bold",
          source: "custom",
          url: "https://framerusercontent.com/assets/PnEiOE3UsAdQnLZAEmxMus2UHA.woff2",
        },
        {
          family: "SF Pro Display Regular",
          source: "custom",
          url: "https://framerusercontent.com/assets/tlFJSDJfyzXzYaP0OEhl8hf6U.woff2",
        },
      ],
    },
    ...ar,
    ...tr,
    ...ir,
    ...or,
    ...sr,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Zr = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerImmutableVariables: "true",
        framerIntrinsicWidth: "1440",
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "4787.5",
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Gj5T_eWxn":{"layout":["fixed","auto"]},"a1cksawgu":{"layout":["fixed","auto"]}}}',
        framerContractVersion: "1",
        framerResponsiveScreen: "",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Zr as __FramerMetadata__, Jr as default };
//# sourceMappingURL=RUr_xQ9kF2AMg2yzbuAr_Ab48vh5ft0HIreS9nLZeWM.PQLCT7SE.mjs.map
