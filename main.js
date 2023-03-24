const sriram = [
{
	first_name: 'Mike',
	location: 'London',
},
{
	first_name: 'Tim',
	location: 'US',
},
{
	first_name: 'John',
	location: 'Australia',
}
];
	var b=[];
sriram.map(function(x)
{
		b.push(x.first_name+" "+"lives in"+" "+x.location);
});
 console.log(b);