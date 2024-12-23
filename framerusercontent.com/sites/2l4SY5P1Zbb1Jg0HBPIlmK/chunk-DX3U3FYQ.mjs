import {
  A as _,
  F as N,
  I as j,
  J as L,
  L as A,
  P as O,
  T as l,
  b as n,
  ba as R,
  d as E,
  ea as de,
  f as C,
  fa as U,
  ga as pe,
  h as G,
  ia as S,
  j as z,
  ja as c,
  k as J,
  la as Q,
  ma as b,
  na as K,
  o as e,
  p as u,
  pa as Z,
  q as k,
  r,
  s as q,
} from "./chunk-EDRQTDHZ.mjs";
import { f as F } from "./chunk-LPOYIOKO.mjs";
F();
F();
pe.loadFonts([]);
var W = [{ explicitInter: !0, fonts: [] }],
  Y = [
    ".framer-MG7Pu .framer-styles-preset-kes50z:not(.rich-text-wrapper), .framer-MG7Pu .framer-styles-preset-kes50z.rich-text-wrapper a { --framer-link-current-text-color: #ffffff; --framer-link-current-text-decoration: none; --framer-link-hover-text-color: #ffffff; --framer-link-hover-text-decoration: none; --framer-link-text-color: rgba(255, 255, 255, 0.8); --framer-link-text-decoration: none; }",
  ],
  $ = "framer-MG7Pu";
var ue = ["cjtTkIAp1", "yfSXmMvM8", "tIxhHMA9M", "ByI9hW0h3"],
  ge = "framer-XdauH",
  xe = {
    ByI9hW0h3: "framer-v-1nertib",
    cjtTkIAp1: "framer-v-1kl73gv",
    tIxhHMA9M: "framer-v-15ojihy",
    yfSXmMvM8: "framer-v-1n4u8vw",
  };
function x(o, ...t) {
  let d = {};
  return t?.forEach((m) => m && Object.assign(d, o[m])), d;
}
var ve = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  be = ({ value: o, children: t }) => {
    let d = C(k),
      m = o ?? d.transition,
      h = z(() => ({ ...d, transition: m }), [JSON.stringify(m)]);
    return e(k.Provider, { value: h, children: t });
  },
  we = r(n),
  Ie = {
    "Phone-Menu": "ByI9hW0h3",
    Desktop: "cjtTkIAp1",
    Phone: "tIxhHMA9M",
    Tablet: "yfSXmMvM8",
  },
  Fe = ({ height: o, id: t, width: d, ...m }) => {
    var h, p;
    return {
      ...m,
      variant:
        (p = (h = Ie[m.variant]) !== null && h !== void 0 ? h : m.variant) !==
          null && p !== void 0
          ? p
          : "cjtTkIAp1",
    };
  },
  ke = (o, t) =>
    o.layoutDependency ? t.join("-") + o.layoutDependency : t.join("-"),
  Ne = E(function (o, t) {
    let { activeLocale: d, setLocale: m } = _(),
      { style: h, className: p, layoutId: y, variant: v, ...X } = Fe(o),
      {
        baseVariant: f,
        classNames: re,
        clearLoadingGesture: w,
        gestureHandlers: ae,
        gestureVariant: g,
        isLoading: se,
        setGestureState: B,
        setVariant: V,
        variants: te,
      } = U({
        cycleOrder: ue,
        defaultVariant: "cjtTkIAp1",
        variant: v,
        variantClassNames: xe,
      }),
      i = ke(o, te),
      { activeVariantCallback: I, delay: s } = R(f),
      H = I(async (...ce) => {
        await s(() => V("tIxhHMA9M"), 2e3);
      }),
      me = I(async (...ce) => {
        await s(() => V("ByI9hW0h3"), 200);
      }),
      oe = I(async (...ce) => {
        await s(() => V("tIxhHMA9M"), 200);
      });
    de(f, { ByI9hW0h3: H });
    let ne = J(null),
      le = () => !["tIxhHMA9M", "ByI9hW0h3"].includes(f),
      T = () => !!["tIxhHMA9M", "ByI9hW0h3"].includes(f),
      ie = () => f === "ByI9hW0h3",
      a = G(),
      M = [$],
      fe = A();
    return e(q, {
      id: y ?? a,
      children: e(we, {
        animate: te,
        initial: !1,
        children: e(be, {
          value: ve,
          children: u(r.div, {
            ...X,
            ...ae,
            className: L(ge, ...M, "framer-1kl73gv", p, re),
            "data-framer-name": "Desktop",
            layoutDependency: i,
            layoutId: "cjtTkIAp1",
            ref: t ?? ne,
            style: {
              backdropFilter: "blur(14.244275093078613px)",
              backgroundColor: "rgba(10, 10, 10, 0.2)",
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              boxShadow:
                "0px 0px 0px 1.1870228052139282px rgba(255, 255, 255, 0.07999999821186066)",
              WebkitBackdropFilter: "blur(14.244275093078613px)",
              ...h,
            },
            ...x(
              {
                ByI9hW0h3: {
                  "data-framer-name": "Phone-Menu",
                  "data-highlight": !0,
                },
                tIxhHMA9M: { "data-framer-name": "Phone" },
                yfSXmMvM8: { "data-framer-name": "Tablet" },
              },
              f,
              g
            ),
            children: [
              u(r.div, {
                className: "framer-ragfln",
                layoutDependency: i,
                layoutId: "qvGrxuc6m",
                children: [
                  e(l, {
                    href: { webPageId: "augiA20Il" },
                    children: e(S, {
                      as: "a",
                      background: {
                        alt: "",
                        fit: "fit",
                        positionX: "center",
                        positionY: "center",
                        src: "/logo_text.svg",
                      },
                      className: "framer-1kdjk9v framer-bag1pc",
                      "data-framer-name": "Logo",
                      layoutDependency: i,
                      layoutId: "AkfzOmFLR",
                    }),
                  }),
                  le() &&
                    u(r.div, {
                      className: "framer-1759wch",
                      "data-framer-name": "Frame 1000001024",
                      layoutDependency: i,
                      layoutId: "mNVBNUs6e",
                      children: [
                        e(c, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e(r.p, {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                                "--framer-font-family":
                                  '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                              },
                              children: e(l, {
                                href: { webPageId: "augiA20Il" },
                                openInNewTab: !1,
                                smoothScroll: !1,
                                children: e(r.a, {
                                  className: "framer-styles-preset-kes50z",
                                  "data-styles-preset": "aqMX2SKcl",
                                  children: "Home",
                                }),
                              }),
                            }),
                          }),
                          className: "framer-rejy2q",
                          "data-framer-name": "Home",
                          fonts: ["CUSTOM;SF Pro Display Bold"],
                          layoutDependency: i,
                          layoutId: "KeMPaomtt",
                          style: {
                            "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "center",
                          withExternalLayout: !0,
                          ...x(
                            {
                              yfSXmMvM8: {
                                children: e(n, {
                                  children: e(r.p, {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                                      "--framer-font-family":
                                        '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      "--framer-font-size": "15px",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                                    },
                                    children: e(l, {
                                      href: { webPageId: "augiA20Il" },
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e(r.a, {
                                        className:
                                          "framer-styles-preset-kes50z",
                                        "data-styles-preset": "aqMX2SKcl",
                                        children: "Home",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            f,
                            g
                          ),
                        }),
                        e(c, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e(r.p, {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                                "--framer-font-family":
                                  '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                              },
                              children: e(l, {
                                href: { webPageId: "P4IqgffB8" },
                                openInNewTab: !1,
                                smoothScroll: !1,
                                children: e(r.a, {
                                  className: "framer-styles-preset-kes50z",
                                  "data-styles-preset": "aqMX2SKcl",
                                  children: "Developers",
                                }),
                              }),
                            }),
                          }),
                          className: "framer-1zrlg",
                          "data-framer-name": "Developers",
                          fonts: ["CUSTOM;SF Pro Display Bold"],
                          layoutDependency: i,
                          layoutId: "V7O1Hk5mt",
                          style: {
                            "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "center",
                          withExternalLayout: !0,
                          ...x(
                            {
                              yfSXmMvM8: {
                                children: e(n, {
                                  children: e(r.p, {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                                      "--framer-font-family":
                                        '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      "--framer-font-size": "15px",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                                    },
                                    children: e(l, {
                                      href: { webPageId: "P4IqgffB8" },
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e(r.a, {
                                        className:
                                          "framer-styles-preset-kes50z",
                                        "data-styles-preset": "aqMX2SKcl",
                                        children: "Developers",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            f,
                            g
                          ),
                        }),
                        e(c, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e(r.p, {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                                "--framer-font-family":
                                  '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                              },
                              children: e(l, {
                                href: "docs.toppointai.corg",
                                openInNewTab: !1,
                                smoothScroll: !1,
                                children: e(r.a, {
                                  className: "framer-styles-preset-kes50z",
                                  "data-styles-preset": "aqMX2SKcl",
                                  children: "Docs",
                                }),
                              }),
                            }),
                          }),
                          className: "framer-uoqnou",
                          "data-framer-name": "Docs",
                          fonts: ["CUSTOM;SF Pro Display Bold"],
                          layoutDependency: i,
                          layoutId: "TgxxK0Utp",
                          style: {
                            "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "center",
                          withExternalLayout: !0,
                          ...x(
                            {
                              yfSXmMvM8: {
                                children: e(n, {
                                  children: e(r.p, {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                                      "--framer-font-family":
                                        '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                      "--framer-font-size": "15px",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                                    },
                                    children: e(l, {
                                      href: "docs.toppointai.corg",
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e(r.a, {
                                        className:
                                          "framer-styles-preset-kes50z",
                                        "data-styles-preset": "aqMX2SKcl",
                                        children: "Docs",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            f,
                            g
                          ),
                        }),
                      ],
                    }),
                  u(r.div, {
                    className: "framer-1e9t075",
                    layoutDependency: i,
                    layoutId: "wPu7g1mTT",
                    children: [
                      T() &&
                        e(r.div, {
                          className: "framer-1sq70y0",
                          "data-highlight": !0,
                          layoutDependency: i,
                          layoutId: "cPOC0i_Qj",
                          ...x(
                            {
                              ByI9hW0h3: { onTap: oe },
                              tIxhHMA9M: { onTap: me },
                            },
                            f,
                            g
                          ),
                          children:
                            T() &&
                            e(Q, {
                              className: "framer-1dkxbyr",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 32,
                              intrinsicWidth: 32,
                              layoutDependency: i,
                              layoutId: "riiLkkMUY",
                              svg: '<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 16a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1ZM5 9h22a1 1 0 1 0 0-2H5a1 1 0 0 0 0 2Zm22 14H5a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" fill="#fff"/></svg>',
                              withExternalLayout: !0,
                            }),
                        }),
                      e(l, {
                        href: "https://app.toppointai.org",
                        openInNewTab: !1,
                        children: e(r.a, {
                          className: "framer-1ptk5f7 framer-bag1pc",
                          "data-framer-name": "CTA",
                          layoutDependency: i,
                          layoutId: "jMt6PraQ9",
                          style: {
                            backgroundColor: "rgb(255, 255, 255)",
                            borderBottomLeftRadius: 12.24,
                            borderBottomRightRadius: 12.24,
                            borderTopLeftRadius: 12.24,
                            borderTopRightRadius: 12.24,
                          },
                          children: e(c, {
                            __fromCanvasComponent: !0,
                            children: e(n, {
                              children: e(r.p, {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                                  "--framer-font-family":
                                    '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                  "--framer-line-height": "22.84px",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(70, 70, 70))",
                                },
                                children: "Launch app",
                              }),
                            }),
                            className: "framer-v93snv",
                            "data-framer-name": "Launch app",
                            fonts: ["CUSTOM;SF Pro Display Bold"],
                            layoutDependency: i,
                            layoutId: "mmmXQ2hT2",
                            style: {
                              "--extracted-r6o4lv": "rgb(70, 70, 70)",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "center",
                            withExternalLayout: !0,
                            ...x(
                              {
                                ByI9hW0h3: {
                                  children: e(n, {
                                    children: e(r.p, {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                                        "--framer-font-family":
                                          '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-line-height": "22.84px",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgb(70, 70, 70))",
                                      },
                                      children: "Launch app",
                                    }),
                                  }),
                                },
                                tIxhHMA9M: {
                                  children: e(n, {
                                    children: e(r.p, {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                                        "--framer-font-family":
                                          '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                                        "--framer-font-size": "14px",
                                        "--framer-line-height": "22.84px",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgb(70, 70, 70))",
                                      },
                                      children: "Launch app",
                                    }),
                                  }),
                                },
                              },
                              f,
                              g
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              ie() &&
                u(r.div, {
                  className: "framer-kyv1ux",
                  "data-framer-name": "Frame 1000001024",
                  layoutDependency: i,
                  layoutId: "kALvCxp91",
                  children: [
                    e(c, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(r.p, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                            "--framer-font-family":
                              '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                            "--framer-font-size": "15px",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                          },
                          children: e(l, {
                            href: { webPageId: "augiA20Il" },
                            openInNewTab: !1,
                            smoothScroll: !1,
                            children: e(r.a, {
                              className: "framer-styles-preset-kes50z",
                              "data-styles-preset": "aqMX2SKcl",
                              children: "Home",
                            }),
                          }),
                        }),
                      }),
                      className: "framer-aqb9qy",
                      "data-framer-name": "Home",
                      fonts: ["CUSTOM;SF Pro Display Bold"],
                      layoutDependency: i,
                      layoutId: "Ft97VuwnA",
                      style: {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "center",
                      withExternalLayout: !0,
                    }),
                    e(c, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(r.p, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                            "--framer-font-family":
                              '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                            "--framer-font-size": "15px",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                          },
                          children: e(l, {
                            href: { webPageId: "P4IqgffB8" },
                            openInNewTab: !1,
                            smoothScroll: !1,
                            children: e(r.a, {
                              className: "framer-styles-preset-kes50z",
                              "data-styles-preset": "aqMX2SKcl",
                              children: "Developers",
                            }),
                          }),
                        }),
                      }),
                      className: "framer-oftdxn",
                      "data-framer-name": "Developers",
                      fonts: ["CUSTOM;SF Pro Display Bold"],
                      layoutDependency: i,
                      layoutId: "ks1lL85Qu",
                      style: {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "center",
                      withExternalLayout: !0,
                    }),
                    e(c, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(r.p, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                            "--framer-font-family":
                              '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                            "--framer-font-size": "15px",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                          },
                          children: e(l, {
                            href: { webPageId: "GF4GXjOQU" },
                            openInNewTab: !1,
                            smoothScroll: !1,
                            children: e(r.a, {
                              className: "framer-styles-preset-kes50z",
                              "data-styles-preset": "aqMX2SKcl",
                              children: "Team",
                            }),
                          }),
                        }),
                      }),
                      className: "framer-hcl3sf",
                      "data-framer-name": "Team",
                      fonts: ["CUSTOM;SF Pro Display Bold"],
                      layoutDependency: i,
                      layoutId: "OTgDB6hGQ",
                      style: {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "center",
                      withExternalLayout: !0,
                    }),
                    e(c, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(r.p, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                            "--framer-font-family":
                              '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                            "--framer-font-size": "15px",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                          },
                          children: e(l, {
                            href: "docs.toppointai.org",
                            openInNewTab: !0,
                            smoothScroll: !1,
                            children: e(r.a, {
                              className: "framer-styles-preset-kes50z",
                              "data-styles-preset": "aqMX2SKcl",
                              children: "Docs",
                            }),
                          }),
                        }),
                      }),
                      className: "framer-1eqoah6",
                      "data-framer-name": "Docs",
                      fonts: ["CUSTOM;SF Pro Display Bold"],
                      layoutDependency: i,
                      layoutId: "gFGMfsIeL",
                      style: {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "center",
                      withExternalLayout: !0,
                    }),
                    e(c, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(r.p, {
                          style: {
                            "--font-selector":
                              "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IEJvbGQ=",
                            "--framer-font-family":
                              '"SF Pro Display Bold", "SF Pro Display Bold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                            "--framer-font-size": "15px",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                          },
                          children: e(l, {
                            href: "https://tristero.substack.com/",
                            openInNewTab: !0,
                            smoothScroll: !1,
                            children: e(r.a, {
                              className: "framer-styles-preset-kes50z",
                              "data-styles-preset": "aqMX2SKcl",
                              children: "Blog",
                            }),
                          }),
                        }),
                      }),
                      className: "framer-10tnnvo",
                      "data-framer-name": "Blog",
                      fonts: ["CUSTOM;SF Pro Display Bold"],
                      layoutDependency: i,
                      layoutId: "QOlkb5Qzf",
                      style: {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "center",
                      withExternalLayout: !0,
                    }),
                  ],
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Se = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-XdauH.framer-bag1pc, .framer-XdauH .framer-bag1pc { display: block; }",
    ".framer-XdauH.framer-1kl73gv { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 8px 8px 8px 20px; position: relative; width: 1296px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-XdauH .framer-ragfln { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-XdauH .framer-1kdjk9v { flex: none; height: 35px; position: relative; text-decoration: none; width: 66px; }",
    ".framer-XdauH .framer-1759wch { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 40%; }",
    ".framer-XdauH .framer-rejy2q, .framer-XdauH .framer-1zrlg, .framer-XdauH .framer-XdauH .framer-uoqnou, .framer-XdauH .framer-XdauH .framer-v93snv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-XdauH .framer-1e9t075 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-XdauH .framer-1sq70y0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 32px; min-width: 1px; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-XdauH .framer-1dkxbyr { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); position: relative; width: 32px; }",
    ".framer-XdauH .framer-1ptk5f7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 12px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-XdauH .framer-kyv1ux { display: grid; flex: none; gap: 42px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 80%; }",
    ".framer-XdauH .framer-aqb9qy, .framer-XdauH .framer-hcl3sf, .framer-XdauH .framer-10tnnvo { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; white-space: pre; width: 100%; }",
    ".framer-XdauH .framer-oftdxn, .framer-XdauH .framer-1eqoah6 { align-self: start; flex: none; height: 18px; justify-self: start; position: relative; white-space: pre-wrap; width: 161px; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-XdauH .framer-1e9t075, .framer-XdauH .framer-1sq70y0, .framer-XdauH .framer-1ptk5f7 { gap: 0px; } .framer-XdauH .framer-1e9t075 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-XdauH .framer-1e9t075 > :first-child, .framer-XdauH .framer-1sq70y0 > :first-child, .framer-XdauH .framer-1ptk5f7 > :first-child { margin-left: 0px; } .framer-XdauH .framer-1e9t075 > :last-child, .framer-XdauH .framer-1sq70y0 > :last-child, .framer-XdauH .framer-1ptk5f7 > :last-child { margin-right: 0px; } .framer-XdauH .framer-1sq70y0 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-XdauH .framer-1ptk5f7 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }",
    ".framer-XdauH.framer-v-1n4u8vw.framer-1kl73gv { width: 729px; }",
    ".framer-XdauH.framer-v-1n4u8vw .framer-1759wch { width: 55%; }",
    ".framer-XdauH.framer-v-1n4u8vw .framer-1ptk5f7 { padding: 10px; }",
    ".framer-XdauH.framer-v-15ojihy.framer-1kl73gv, .framer-XdauH.framer-v-1nertib.framer-1kl73gv { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 28px; justify-content: flex-start; width: 390px; }",
    ".framer-XdauH.framer-v-15ojihy .framer-ragfln, .framer-XdauH.framer-v-1nertib .framer-ragfln { flex: none; width: 100%; }",
    ".framer-XdauH.framer-v-15ojihy .framer-1sq70y0, .framer-XdauH.framer-v-1nertib .framer-1sq70y0 { min-height: unset; min-width: unset; }",
    ".framer-XdauH.framer-v-15ojihy .framer-1ptk5f7, .framer-XdauH.framer-v-1nertib .framer-1ptk5f7 { padding: 8px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-XdauH.framer-v-15ojihy.framer-1kl73gv { gap: 0px; } .framer-XdauH.framer-v-15ojihy.framer-1kl73gv > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-XdauH.framer-v-15ojihy.framer-1kl73gv > :first-child { margin-top: 0px; } .framer-XdauH.framer-v-15ojihy.framer-1kl73gv > :last-child { margin-bottom: 0px; } }",
    ".framer-XdauH.framer-v-1nertib .framer-aqb9qy { order: 0; }",
    ".framer-XdauH.framer-v-1nertib .framer-oftdxn { order: 2; }",
    ".framer-XdauH.framer-v-1nertib .framer-hcl3sf { order: 4; }",
    ".framer-XdauH.framer-v-1nertib .framer-1eqoah6 { order: 1; }",
    ".framer-XdauH.framer-v-1nertib .framer-10tnnvo { order: 3; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-XdauH.framer-v-1nertib.framer-1kl73gv { gap: 0px; } .framer-XdauH.framer-v-1nertib.framer-1kl73gv > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-XdauH.framer-v-1nertib.framer-1kl73gv > :first-child { margin-top: 0px; } .framer-XdauH.framer-v-1nertib.framer-1kl73gv > :last-child { margin-bottom: 0px; } }",
    ...Y,
  ],
  D = O(Ne, Se, "framer-XdauH"),
  Le = D;
D.displayName = "Header";
D.defaultProps = { height: 63, width: 1296 };
j(D, {
  variant: {
    options: ["cjtTkIAp1", "yfSXmMvM8", "tIxhHMA9M", "ByI9hW0h3"],
    optionTitles: ["Desktop", "Tablet", "Phone", "Phone-Menu"],
    title: "Variant",
    type: N.Enum,
  },
});
K(
  D,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "SF Pro Display Bold",
          source: "custom",
          url: "https://framerusercontent.com/assets/PnEiOE3UsAdQnLZAEmxMus2UHA.woff2",
        },
      ],
    },
    ...Z(W),
  ],
  { supportsExplicitInterCodegen: !0 }
);
F();
var Be = ["lg5rA0IwE", "UUXNeV_D9", "uKYbUZw9a"],
  Me = "framer-4loJ5",
  De = {
    lg5rA0IwE: "framer-v-1l4etx0",
    uKYbUZw9a: "framer-v-wwcywb",
    UUXNeV_D9: "framer-v-jzf39a",
  };
function ee(o, ...t) {
  let d = {};
  return t?.forEach((m) => m && Object.assign(d, o[m])), d;
}
var Pe = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Xe = ({ value: o, children: t }) => {
    let d = C(k),
      m = o ?? d.transition,
      h = z(() => ({ ...d, transition: m }), [JSON.stringify(m)]);
    return e(k.Provider, { value: h, children: t });
  },
  Ve = r(n),
  He = { Desktop: "lg5rA0IwE", Phone: "uKYbUZw9a", Tablet: "UUXNeV_D9" },
  Te = ({ click: o, click2: t, height: d, id: m, width: h, ...p }) => {
    var y, v;
    return {
      ...p,
      uDGGzBonb: t ?? p.uDGGzBonb,
      variant:
        (v = (y = He[p.variant]) !== null && y !== void 0 ? y : p.variant) !==
          null && v !== void 0
          ? v
          : "lg5rA0IwE",
      vm8V9Z99U: o ?? p.vm8V9Z99U,
    };
  },
  Ee = (o, t) =>
    o.layoutDependency ? t.join("-") + o.layoutDependency : t.join("-"),
  Ce = E(function (o, t) {
    let { activeLocale: d, setLocale: m } = _(),
      {
        style: h,
        className: p,
        layoutId: y,
        variant: v,
        vm8V9Z99U: X,
        uDGGzBonb: f,
        ...re
      } = Te(o),
      {
        baseVariant: w,
        classNames: ae,
        clearLoadingGesture: g,
        gestureHandlers: se,
        gestureVariant: B,
        isLoading: V,
        setGestureState: te,
        setVariant: i,
        variants: I,
      } = U({
        cycleOrder: Be,
        defaultVariant: "lg5rA0IwE",
        variant: v,
        variantClassNames: De,
      }),
      s = Ee(o, I),
      { activeVariantCallback: H, delay: me } = R(w),
      oe = H(async (...M) => {
        if (X && (await X(...M)) === !1) return !1;
      }),
      ne = H(async (...M) => {
        if (f && (await f(...M)) === !1) return !1;
      }),
      le = J(null),
      T = G(),
      ie = [$],
      a = A();
    return e(q, {
      id: y ?? T,
      children: e(Ve, {
        animate: I,
        initial: !1,
        children: e(Xe, {
          value: Pe,
          children: e(r.div, {
            ...re,
            ...se,
            className: L(Me, ...ie, "framer-1l4etx0", p, ae),
            "data-border": !0,
            "data-framer-name": "Desktop",
            layoutDependency: s,
            layoutId: "lg5rA0IwE",
            ref: t ?? le,
            style: {
              "--border-bottom-width": "1px",
              "--border-color": "rgba(255, 255, 255, 0.1)",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor:
                "var(--token-b92756f3-33ab-4a15-aa7d-195a39e898da, rgb(5, 7, 19))",
              ...h,
            },
            ...ee(
              {
                uKYbUZw9a: { "data-framer-name": "Phone" },
                UUXNeV_D9: { "data-framer-name": "Tablet" },
              },
              w,
              B
            ),
            children: u(r.div, {
              className: "framer-11w1otq",
              layoutDependency: s,
              layoutId: "o2P4t4lQz",
              children: [
                e(r.div, {
                  className: "framer-1ktao9t",
                  layoutDependency: s,
                  layoutId: "xbAFOimy2",
                  style: { backgroundColor: "rgba(187, 221, 255, 0)" },
                  children: e(S, {
                    background: {
                      alt: "",
                      fit: "fit",
                      loading: b(
                        (a?.y || 0) +
                          (40 + ((a?.height || 128) - 80 - 96) / 2) +
                          24 +
                          0
                      ),
                      positionX: "center",
                      positionY: "center",
                      src: "https://framerusercontent.com/images/Z8hzfFL4B8cj9upO6iHthGV5a9U.png",
                    },
                    className: "framer-m65qwz",
                    "data-framer-name": "Logo",
                    layoutDependency: s,
                    layoutId: "dpZhjJAMI",
                    ...ee(
                      {
                        uKYbUZw9a: {
                          background: {
                            alt: "",
                            fit: "fit",
                            loading: b(
                              (a?.y || 0) +
                                (40 + ((a?.height || 200) - 80 - 287) / 2) +
                                0 +
                                0 +
                                0
                            ),
                            positionX: "center",
                            positionY: "center",
                            src: "https://framerusercontent.com/images/Z8hzfFL4B8cj9upO6iHthGV5a9U.png",
                          },
                        },
                      },
                      w,
                      B
                    ),
                  }),
                }),
                e(r.div, {
                  className: "framer-1qn5hh1",
                  layoutDependency: s,
                  layoutId: "kj8qsBLcx",
                  style: { backgroundColor: "rgba(204, 238, 255, 0)" },
                  children: u(r.div, {
                    className: "framer-1ou4zld",
                    "data-framer-name": "Frame 1000001036",
                    layoutDependency: s,
                    layoutId: "Ci_ijdccr",
                    children: [
                      e(c, {
                        __fromCanvasComponent: !0,
                        children: e(n, {
                          children: e(r.p, {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO1NGIFBybyBEaXNwbGF5IE1lZGl1bQ==",
                              "--framer-font-family":
                                '"SF Pro Display Medium", "SF Pro Display Medium Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.5))",
                            },
                            children: e(l, {
                              href: { webPageId: "augiA20Il" },
                              openInNewTab: !1,
                              smoothScroll: !1,
                              children: e(r.a, {
                                className: "framer-styles-preset-kes50z",
                                "data-styles-preset": "aqMX2SKcl",
                                children: "Home",
                              }),
                            }),
                          }),
                        }),
                        className: "framer-3lw2bx",
                        "data-framer-name": "Home",
                        fonts: ["CUSTOM;SF Pro Display Medium"],
                        layoutDependency: s,
                        layoutId: "B9UgTpkNK",
                        style: {
                          "--extracted-r6o4lv": "rgba(255, 255, 255, 0.5)",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "center",
                        withExternalLayout: !0,
                      }),
                      e(c, {
                        __fromCanvasComponent: !0,
                        children: "",
                        className: "framer-1rtelk7",
                        "data-framer-name": "Blog",
                        fonts: ["CUSTOM;SF Pro Display Medium"],
                        layoutDependency: s,
                        layoutId: "K3E_qG__1",
                        style: {
                          "--extracted-r6o4lv": "rgba(255, 255, 255, 0.5)",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "center",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
                e(r.div, {
                  className: "framer-1ur8gx7",
                  layoutDependency: s,
                  layoutId: "mYP4o9Hjg",
                  style: { backgroundColor: "rgba(204, 238, 255, 0)" },
                  children: u(r.div, {
                    className: "framer-hrz8",
                    "data-framer-name": "Frame 1000001049",
                    "data-highlight": !0,
                    layoutDependency: s,
                    layoutId: "zbEL1kUfr",
                    onTap: oe,
                    children: [
                      e(l, {
                        href: "https://x.com/toppointai",
                        openInNewTab: !0,
                        children: e(r.a, {
                          className: "framer-qrrhxo framer-1rpdhen",
                          "data-framer-name": "Social Icons",
                          layoutDependency: s,
                          layoutId: "xXT74uEdk",
                          children: e(Q, {
                            className: "framer-1paktsw",
                            "data-framer-name": "Vector",
                            layout: "position",
                            layoutDependency: s,
                            layoutId: "V1zf11qsL",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 21"><path d="M 17.326 0.904 L 20.7 0.904 L 13.33 9.327 L 22 20.79 L 15.211 20.79 L 9.894 13.838 L 3.81 20.79 L 0.434 20.79 L 8.317 11.78 L 0 0.904 L 6.961 0.904 L 11.767 7.258 Z M 16.142 18.771 L 18.012 18.771 L 5.945 2.817 L 3.939 2.817 Z" fill="rgb(255,255,255)"></path></svg>',
                            svgContentId: 12231763216,
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                      e(l, {
                        href: "https://t.me/toppointai",
                        openInNewTab: !0,
                        children: e(S, {
                          as: "a",
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 144.44444827091556,
                            intrinsicWidth: 174.4444490656442,
                            loading: b(
                              (a?.y || 0) +
                                (40 + ((a?.height || 128) - 80 - 96) / 2) +
                                36 +
                                0 +
                                2.063694267515924
                            ),
                            pixelHeight: 130,
                            pixelWidth: 157,
                            src: "https://framerusercontent.com/images/KnjGy1B3gqEqoN8uacPVoanC62Y.png",
                          },
                          className: "framer-hyhslv framer-1rpdhen",
                          "data-framer-name": "Vector",
                          "data-highlight": !0,
                          layoutDependency: s,
                          layoutId: "bNj569cvN",
                          onTap: ne,
                          ...ee(
                            {
                              uKYbUZw9a: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 144.44444827091556,
                                  intrinsicWidth: 174.4444490656442,
                                  loading: b(
                                    (a?.y || 0) +
                                      (40 +
                                        ((a?.height || 200) - 80 - 287) / 2) +
                                      0 +
                                      119 +
                                      0 +
                                      2.063694267515924
                                  ),
                                  pixelHeight: 130,
                                  pixelWidth: 157,
                                  src: "https://framerusercontent.com/images/KnjGy1B3gqEqoN8uacPVoanC62Y.png",
                                },
                              },
                            },
                            w,
                            B
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Ge = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-4loJ5.framer-1rpdhen, .framer-4loJ5 .framer-1rpdhen { display: block; }",
    ".framer-4loJ5.framer-1l4etx0 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 40px 72px 40px 72px; position: relative; width: 1440px; }",
    ".framer-4loJ5 .framer-11w1otq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-4loJ5 .framer-1ktao9t, .framer-4loJ5 .framer-1ur8gx7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }",
    ".framer-4loJ5 .framer-m65qwz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; padding: 0px; position: relative; width: 92px; }",
    ".framer-4loJ5 .framer-1qn5hh1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }",
    ".framer-4loJ5 .framer-1ou4zld { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 79px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-4loJ5 .framer-3lw2bx, .framer-4loJ5 .framer-1nl5qhv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-4loJ5 .framer-1rtelk7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 57px; word-break: break-word; word-wrap: break-word; }",
    ".framer-4loJ5 .framer-hrz8 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-4loJ5 .framer-qrrhxo { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: hidden; position: relative; text-decoration: none; width: 24px; }",
    ".framer-4loJ5 .framer-1paktsw { flex: none; height: 21px; left: 1px; position: absolute; top: 1px; width: 22px; }",
    ".framer-4loJ5 .framer-xpd9zh { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; text-decoration: none; width: 24px; }",
    ".framer-4loJ5 .framer-hyhslv { aspect-ratio: 1.2076923076923078 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; text-decoration: none; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-4loJ5.framer-1l4etx0, .framer-4loJ5 .framer-1ktao9t, .framer-4loJ5 .framer-m65qwz, .framer-4loJ5 .framer-1qn5hh1, .framer-4loJ5 .framer-1ou4zld, .framer-4loJ5 .framer-1ur8gx7, .framer-4loJ5 .framer-hrz8 { gap: 0px; } .framer-4loJ5.framer-1l4etx0 > *, .framer-4loJ5 .framer-1ktao9t > *, .framer-4loJ5 .framer-1ur8gx7 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-4loJ5.framer-1l4etx0 > :first-child, .framer-4loJ5 .framer-1ktao9t > :first-child, .framer-4loJ5 .framer-1ou4zld > :first-child, .framer-4loJ5 .framer-1ur8gx7 > :first-child, .framer-4loJ5 .framer-hrz8 > :first-child { margin-left: 0px; } .framer-4loJ5.framer-1l4etx0 > :last-child, .framer-4loJ5 .framer-1ktao9t > :last-child, .framer-4loJ5 .framer-1ou4zld > :last-child, .framer-4loJ5 .framer-1ur8gx7 > :last-child, .framer-4loJ5 .framer-hrz8 > :last-child { margin-right: 0px; } .framer-4loJ5 .framer-m65qwz > *, .framer-4loJ5 .framer-1qn5hh1 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-4loJ5 .framer-m65qwz > :first-child, .framer-4loJ5 .framer-1qn5hh1 > :first-child { margin-top: 0px; } .framer-4loJ5 .framer-m65qwz > :last-child, .framer-4loJ5 .framer-1qn5hh1 > :last-child { margin-bottom: 0px; } .framer-4loJ5 .framer-1ou4zld > * { margin: 0px; margin-left: calc(79px / 2); margin-right: calc(79px / 2); } .framer-4loJ5 .framer-hrz8 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } }",
    ".framer-4loJ5.framer-v-jzf39a.framer-1l4etx0 { padding: 40px; width: 810px; }",
    ".framer-4loJ5.framer-v-wwcywb.framer-1l4etx0 { width: 390px; }",
    ".framer-4loJ5.framer-v-wwcywb .framer-11w1otq { flex: none; flex-direction: column; gap: 48px; justify-content: flex-start; width: min-content; }",
    ".framer-4loJ5.framer-v-wwcywb .framer-1ktao9t { order: 0; }",
    ".framer-4loJ5.framer-v-wwcywb .framer-m65qwz { height: 71px; width: 137px; }",
    ".framer-4loJ5.framer-v-wwcywb .framer-1qn5hh1 { order: 2; }",
    ".framer-4loJ5.framer-v-wwcywb .framer-1ou4zld { gap: 32px; }",
    ".framer-4loJ5.framer-v-wwcywb .framer-1ur8gx7 { order: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-4loJ5.framer-v-wwcywb .framer-11w1otq, .framer-4loJ5.framer-v-wwcywb .framer-1ou4zld { gap: 0px; } .framer-4loJ5.framer-v-wwcywb .framer-11w1otq > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-4loJ5.framer-v-wwcywb .framer-11w1otq > :first-child { margin-top: 0px; } .framer-4loJ5.framer-v-wwcywb .framer-11w1otq > :last-child { margin-bottom: 0px; } .framer-4loJ5.framer-v-wwcywb .framer-1ou4zld > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-4loJ5.framer-v-wwcywb .framer-1ou4zld > :first-child { margin-left: 0px; } .framer-4loJ5.framer-v-wwcywb .framer-1ou4zld > :last-child { margin-right: 0px; } }",
    ...Y,
    '.framer-4loJ5[data-border="true"]::after, .framer-4loJ5 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  P = O(Ce, Ge, "framer-4loJ5"),
  Ke = P;
P.displayName = "Footer 2";
P.defaultProps = { height: 128, width: 1440 };
j(P, {
  variant: {
    options: ["lg5rA0IwE", "UUXNeV_D9", "uKYbUZw9a"],
    optionTitles: ["Desktop", "Tablet", "Phone"],
    title: "Variant",
    type: N.Enum,
  },
  vm8V9Z99U: { title: "Click", type: N.EventHandler },
  uDGGzBonb: { title: "Click 2", type: N.EventHandler },
});
K(
  P,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "SF Pro Display Medium",
          source: "custom",
          url: "https://framerusercontent.com/assets/t3oAfXfUztEwRkUgp2RBWw8zPg.woff2",
        },
      ],
    },
    ...Z(W),
  ],
  { supportsExplicitInterCodegen: !0 }
);
export { Le as a, Ke as b };
//# sourceMappingURL=chunk-DX3U3FYQ.mjs.map
