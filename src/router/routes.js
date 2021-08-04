const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/hash",
    name: "Hash",
    component: () => import("../views/Hash.vue"),
  },
  {
    path: "/color",
    name: "Color",
    component: () => import("../views/Color.vue"),
  },
  {
    path: "/json",
    name: "Json",
    component: () => import("../views/Json.vue"),
  },
  {
    path: "/datetime",
    name: "Datetime",
    component: () => import("../views/Datetime.vue"),
  },
  {
    path: "/encode/base64",
    name: "Base64",
    component: () => import("../views/encode/Base64.vue"),
  },
  {
    path: "/encode/urlencode",
    name: "URLEncode",
    component: () => import("../views/encode/URLEncode.vue"),
  },
  {
    path: "/image/placeholder",
    name: "ImagePlaceholder",
    component: () => import("../views/image/Placeholder.vue"),
  },
  {
    path: "/image/qrcode",
    name: "ImageQRCode",
    component: () => import("../views/image/QRCode.vue"),
  },
  {
    path: "/transform/json2yaml",
    name: "Json2yaml",
    component: () => import("../views/transform/Json2yaml.vue"),
  },
  {
    path: "/password/make",
    name: "PasswordMake",
    component: () => import("../views/password/make.vue"),
  },
  {
    path: "/password/otp",
    name: "PasswordOtp",
    component: () => import("../views/Otp.vue"),
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
