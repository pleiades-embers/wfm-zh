import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vitePluginForArco } from "@arco-plugins/vite-react";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), vitePluginForArco({
    style:"css"
  })],
  server: {
      proxy: {
          '/api': {
              target: 'https://trade.wf.qq.com/api/v1/wegame.rail.game.MatchBill/',
              secure: false, // 如果是https接口，需要配置这个参数
              changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
              rewrite: (path) => path.replace(/^\/api/, ''),
              headers: {
                authority: "trade.wf.qq.com",
                pragma: "no-cache",
                "trpc-caller": "wegame.pallas.web.WarframeMarket",
                Cookie:
                  "iip=0; pgv_pvid=6860963420; ptcz=6e0605801172423f67ede3a294a0bbb529c67d6726e4894c7d56dcb9746ded38; fqm_pvqid=24aafce7-da2f-42ea-beec-4148ea113e43; qq_domain_video_guid_verify=b95c52fe0c3c8390; eas_sid=V18740O0T3k0z3C3H363v8Y4l1; _qimei_uuid42=17b1715290d100591d1dcfbbf29a65bc239a6f06da; _qimei_q36=; _qimei_h38=fded4beb1d1dcfbbf29a65bc0200000a817b17; _qimei_fingerprint=dde426a46aa025e6b8b0acd9d4358968; RK=OWvdcHPMEi; wf_session=elvsgdrj08bjg592p0ou81e8c2; _qpsvr_localtk=0.48163890803540155; ptui_loginuin=935267851; uin=o0935267851; skey=@lXI5oY84f; eas_entry=https%3A%2F%2Fapi.rail.tgp.qq.com%2F; wf_uid=76561197981847231; pgv_info=ssid=s850517692; wf_token=eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJzdGF0ZSI6Ik9SZW9DbFVOc2k5Z3ZtSUQiLCJsb2dpbl9yZWRpcmVjdF91cmkiOiJodHRwczpcL1wvdHJhZGUud2YucXEuY29tXC9pbmRleC5odG1sIiwiaXNzIjoiaHR0cDpcL1wvc3RvcmUud2YucXEuY29tIiwiaWF0IjoxNzA2ODcyMzMwLCJleHAiOjE3MDY5NTg3MzAsImFjY2Vzc190b2tlbiI6IkNnalhUSnR4bURqS1h4QUFHbERnX0NXWHc2RHNQMnNZTk9jWU11d01iTzdhNUpvQjhJY2lrS2tFNjBja3VPb1U5U2NGWkVGNTBKZnZuSjBXTndhci1FSkFPRjUzOXZMT1NqRVl5UVg0R19yQ09XSFYtSGhGTmh6enctdnJCZyIsInJlZnJlc2hfdG9rZW4iOiJDZ2d5ajBWTXVfRTJIUkFBR2tDc2RwZGdiZ2ZFck8xVER3VnlGaHhHS2k2Y0tzMFJFbkJKRlR0ZDhmaWNCQldlNTRySzNsTGpKTHUwQ0lXMkdUZTYzLWlDMkJqWml6RWlWRUQ1OE9DUSIsInRva2VuX2V4cGlyZWRfdGltZSI6MTcwNjg3NTk2NSwidXNlcl9pZCI6Ijc2NTYxMTk3OTgxODQ3MjMxIiwibG9naW5fYWNjb3VudF90eXBlIjoicXEiLCJuaWNrX25hbWUiOiJudXh0LmpzIiwiYXZhdGFyX3VybCI6Imh0dHBzOlwvXC9zaHAucXBpYy5jblwvd2dfaHBpY1wvMFwvMTU1MjgwNjEzNTg2OF9hdmF0YXJfNzhhZjBmNjMtZDNkMy00YTlkLTkwMjUtYTk2N2QzNjNjOTBmXC8wIn0.mk1eKA_y4sI6S3Cbx6T-xhkVFl6bS2HA5DGVVDh01i0",
                "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
                "content-type": "application/json;charset=UTF-8",
              },
          }
      }
  }
});
