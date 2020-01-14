const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    
    insertTaskData: function insertData(req, res)
    {
        let task = new Task();

        task.id = "dfrfergdfrfrdf" //req.body._id;
        task.name = "task test" //req.body.task_name;
        task.start = "22/01/2020"//req.body.start;
        task.end = "24/01/2020"//req.body.end;
        task.progress = "50"//req.body.statu;
        task.dependencies = "task 0"//req.body.source;
        task.custom_class = "ressource 1"//req.body.step;

        task.save((err, doc) => {
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log('insertion success !');

                //res.redirect('show-tasks/displayAllTask');
            }
        });
    }


};