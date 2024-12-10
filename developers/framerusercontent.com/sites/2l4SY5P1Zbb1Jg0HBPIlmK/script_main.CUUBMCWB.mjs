import {
  B as _,
  E as k,
  G as E,
  S as I,
  V as P,
  c as i,
  da as S,
  e as h,
  qa as w,
  t as R,
  u as p,
  v as a,
  w as y,
  x as F,
  y as b,
  z as v,
} from "./chunk-EDRQTDHZ.mjs";
import { d as window, f as m } from "./chunk-LPOYIOKO.mjs";
m();
m();
var B = "default" in p ? R : p,
  l = {},
  z = B;
l.createRoot = z.createRoot;
l.hydrateRoot = z.hydrateRoot;
var O = l.createRoot,
  U = l.hydrateRoot;
var f = {
    augiA20Il: {
      elements: {},
      page: a(() =>
        import("./RUr_xQ9kF2AMg2yzbuAr_Ab48vh5ft0HIreS9nLZeWM.PQLCT7SE.mjs")
      ),
      path: "/",
    },
    P4IqgffB8: {
      elements: {},
      page: a(() =>
        import("./hGS_YF-jjjtdPqLlwW7G53Y5YFqZR--Mdyd2-dDOaGM.TS5P5O4Z.mjs")
      ),
      path: "/developers",
    },
    GF4GXjOQU: {
      elements: {},
      page: a(() =>
        import("./LXml2hu512QK1gj-OH81ulxtIvpsAAf3UXjKBN2eL4w.GYG7QYO2.mjs")
      ),
      path: "/team",
    },
    Znd1OQrLU: {
      elements: {},
      page: a(() =>
        import("./jra3NZYpjlwiBZhERzTFBrEd8GDIaWPDVsdciis1K_s.75D5MOO4.mjs")
      ),
      path: "/signup",
    },
    b66FWEeXL: {
      elements: {},
      page: a(() =>
        import("./VNDG2qlg1LEeymNbepjI3Gu3dotalJNljLV8WDXPhuE.IARC7GQC.mjs")
      ),
      path: "/formsignuptest2",
    },
    fiCkjEIpL: {
      elements: {},
      page: a(() =>
        import("./AcV7ehXMWLM7OK3-92OgzLgkkxQG9FWyCBiDgqIoO5Y.JGR5GUIM.mjs")
      ),
      path: "/open-roles",
    },
    W0jZg6cZ0: {
      elements: {},
      page: a(() =>
        import("./mY5WPaaCO73m9N4m3FJ0WMVvsrhAEjXIrPnRCuZ6cOc.MHBVJ3NG.mjs")
      ),
      path: "/open-roles-first-page",
    },
  },
  D = [{ code: "en-US", id: "default", name: "English", slug: "" }];
async function W({ routeId: t, pathVariables: o, localeId: r }) {
  await f[t].page.preload();
  let n = i(P, {
      isWebsite: !0,
      routeId: t,
      pathVariables: o,
      routes: f,
      collectionUtils: {},
      framerSiteId:
        "2ddfa589eb88fcc0df5fe986bffa9110244fc336845dbc6370f1bf154c3bdbb7",
      notFoundPage: a(() => import("./SitesNotFoundPage.js@1.1-VHANV5JK.mjs")),
      isReducedMotion: !0,
      localeId: r,
      locales: D,
      preserveQueryParams: void 0,
    }),
    s = i(I, {
      children: n,
      value: { enableAsyncURLUpdates: !1, useGranularSuspense: !0 },
    });
  return i(y, { children: s, value: { routes: {} } });
}
var L = typeof document < "u";
if (L) {
  (window.__framer_importFromPackage = (o, r) => () =>
    i(k, {
      error: 'Package component not supported: "' + r + '" in "' + o + '"',
    })),
    (window.process = {
      ...window.process,
      env: {
        ...(window.process ? window.process.env : void 0),
        NODE_ENV: "production",
      },
    }),
    (window.__framer_events = window.__framer_events || []),
    E();
  let t = document.getElementById("main");
  "framerHydrateV2" in t.dataset ? x(!0, t) : x(!1, t);
}
function V() {
  L && window.__framer_events.push(arguments);
}
async function x(t, o) {
  try {
    let g = function (e, M) {
        let d = M?.componentStack;
        console.warn(
          "Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.",
          e,
          d
        ),
          !(Math.random() > 0.01) &&
            V("published_site_load_recoverable_error", {
              message: String(e),
              componentStack: d,
              stack: d
                ? void 0
                : e instanceof Error && typeof e.stack == "string"
                ? e.stack
                : null,
            });
      },
      r,
      n,
      s,
      c;
    if (t) {
      let e = JSON.parse(o.dataset.framerHydrateV2);
      (r = e.routeId),
        (n = e.localeId),
        (s = e.pathVariables),
        (c = e.breakpoints);
    } else {
      let e = _(f, decodeURIComponent(location.pathname), !0, D);
      (r = e.routeId), (n = e.localeId), (s = e.pathVariables);
    }
    let u = await W({ routeId: r, localeId: n, pathVariables: s });
    t
      ? (w("framer-rewrite-breakpoints", () => {
          S(c), window.__framer_onRewriteBreakpoints?.(c);
        }),
        h(() => {
          F(), v(), b(), U(o, u, { onRecoverableError: g });
        }))
      : O(o, { onRecoverableError: g }).render(u);
  } catch (r) {
    throw (
      (V("published_site_load_error", {
        message: String(r),
        stack:
          r instanceof Error && typeof r.stack == "string" ? r.stack : null,
      }),
      r)
    );
  }
}
export { W as getPageRoot };
//# sourceMappingURL=script_main.CUUBMCWB.mjs.map
