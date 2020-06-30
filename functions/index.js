const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

    const createNotyfication = (notyfication => {
        return admin.firestore().collection('notyfications').add(notyfication).then(doc => console.log('notyfication added', doc))
    })

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc => {
        const project = doc.data();
        console.log(project, 'functions')
        const notyfication = {
            content: 'Added a new project',
            user: `user: ${project.authorFirstName} ${project.authorLastName} `,
            title: project.title,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotyfication(notyfication)
})

exports.userJoined = functions.auth.user().onCreate(user => {
    return admin.firestore().collection('users').doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notyfication = {
            content: 'Joined the party',
            user: newUser.firstName?newUser.firstName:null,
            title: newUser.title?newUser.title:null,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotyfication(notyfication)
    })
})