export default function ({ isHMR, app, store, route, params, error, redirect }) {
  if (process.client) {
    const token = localStorage.getItem('token')
    console.log({ token })
    // return redirect('/en/login')
  }
}
