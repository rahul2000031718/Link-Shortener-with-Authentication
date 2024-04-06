import express from 'express';
import shortId from 'shortid';
import { urlSubmitionModel } from '../model/url.model.js';

const router = express.Router();

router.post('/urlSubmit', async (req, res) => {
    const { userId, longUrl } = req.body;
    try {
        const shorturl = shortId.generate();
        const urlSubmit = new urlSubmitionModel({ userId, longUrl, shortUrl: shorturl });
        await urlSubmit.save();

        res.json({ status: true, shortUrl: `http://localhost:3000/${shorturl}` });
    } catch (error) {
        res.json({ status: false, message: "Something went wrong" });
    }
});



router.post('/getUserURL', async (req, res) => {
    const { userId } = req.body;
    const allUserUrl = await urlSubmitionModel.find({ userId });
    if (allUserUrl) {
        res.json({ status: true, success: allUserUrl });
    } else {
        res.json({ status: false, message: "no data" });
    }
});




  /*router.get('/url', async (req, res) => {
    const { url } = req.params;

    const urlData = await urlSubmitionModel.findOne({ shortUrl: url });

    if (urlData) {
        // Track referral source
        const referralSource = req.headers.referer || 'Direct'; // Get referral source from request headers
        // You may need to extract the domain or specific information from the referral source based on your requirements

        // Now you can save the referral source along with other analytics data
        // Example: Save referral source to the database
        // urlData.referralSource = referralSource;
        // await urlData.save();

        res.redirect(urlData.longUrl);
    } else {
        res.json({ status: false, message: "invalid" });
    }
});*/




router.get('/urls', async (req, res) => {
    try {
      // Fetch all documents from the urlSubmitionModel
      const urls = await urlSubmitionModel.find({}).exec();
      //console.log(urls,"***************");
      let urls_count= urls.length;
      res.json({ urls, urls_count });

    } catch (error) {
      console.error('Error fetching URLs:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });



  router.get('/:url', async (req, res) => {
    //console.log(req,"MMMM");
    const { url } = req.params;
    console.log(url,"////////");
    const urlData = await urlSubmitionModel.findOne({ shortUrl: url });
console.log(urlData,",,,,,,,,,,,,,,");
    if (urlData) {
        res.redirect(urlData.longUrl);
    } else {
        res.json({ status: false, message: "wrong" });
    }
});

export default router;
