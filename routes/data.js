// page.js
module.exports = (app) => {
  app.get('/data/:slug', async (req, res) => {
    const slug = req.params.slug
    console.log(slug);
   try {
//      const response = await bucket.getObjects()
//      const objects = response.objects
      
    } catch(error) {
      console.log(error)
      return res.status(500).send({ "status": "error", "message": "Yikes, something went wrong!" })
    }
  })
}
