// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const host = req.headers.host
  console.log(host)
  console.log(host.length)
  console.log("localhost:3000".length)
  for (var i = 0; i < host.length; i++) {
    console.log(i, host.charAt(i), host.charCodeAt(i), host.codePointAt(i).toString(16));
  }
  console.log(host)
  res.status(200).end()
}
