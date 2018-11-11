import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import School from 'C:/Users/Brad/FantasticFour/backend/models/School';

const app = express();
const router = express.Router();		

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1/school');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/school').get((req, res) => {
    School.find((err, school) => {
        if (err)
            console.log(err);
        else
            res.json(school);
    });
});

router.route('/school/:id').get((req, res) => {
	School.findById(req.params.id, (err, school) => {
        if (err)
            console.log(err);
        else
            res.json(school);
    })
});

router.route('/school/add').post((req, res) => {
    let school = new School(req.body);
    school.save()
        .then(school => {
            res.status(200).json({'school': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new school record');
        });
});

router.route('/school/update/:id').post((req, res) => {
    School.findById(req.params.id, (err, school) => {
        if (!school)
            return next(new Error('Could not load Document'));
        else {
            school.name = req.body.name;
            school.location = req.body.location;
            school.gpaReq = req.body.gpaReq;
            school.gre = req.body.gre;
            school.greReq = req.body.greReq;
            school.hoursReq = req.body.hoursReq;
            school.lettersReq = req.body.lettersReq;



            school.save().then(school => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/school/delete/:id').get((req, res) => {
    School.findOneAndDelete({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('School removed successfully');
    });
});

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));