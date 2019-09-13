const LineConnect = require('./connect');
const LINE = require('./main.js');
const fs = require('fs');
console.info("\n\
 Thanks to @Alfathdirk @TCR_TEAM\n\
\nNB : Remake From @Myyepz \n\
***Copyright belongs to the author***");

/*
| This constant is for auth/login
*/
//Myyepz

const auth = {
    authToken: '',
	certificate: '',
	email: '',
	password: ''
}

let client =  new LineConnect();
//let client =  new LineConnect(auth);

client.startx().then(async (res) => {
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
		//LINE.aLike() //AutoLike (CAUSE LAG)
	}
});
