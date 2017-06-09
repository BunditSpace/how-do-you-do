import Conversation from '../models/conversation.model'

export default (app, router) => {
 app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
  });
  // ## Conversation API Routes

  // Define routes for the `conversationChart` API

  router.route('/conversationChartLabel/:creator')
    .get((req, res) => {
      Conversation.distinct("talkwith", { creator: req.params.creator }, (err, chart) => {
        if(err)
          res.send(err);

        else
          res.json(chart);
      });
    });

 router.route('/conversationChart/:creator')
    .get((req, res) => {
      Conversation.aggregate([
            { "$match": { "creator": req.params.creator }},
            // Count all occurrences
            { "$group": {
                _id: "$talkwith", "count": { "$sum": 1 }
            }},
              // Sum all occurrences and count distinct
              { "$group": {
                  "_id": "$_id",
                  "totalCount": { "$sum": "$count" }
              }}
          ], (err, chart) =>{
                if(err)
                  res.send(err);

                else
                  res.json(chart);
          })
    });
};
