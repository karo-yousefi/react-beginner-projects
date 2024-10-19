const accordionData = [
	{
		id: 0,
		title: "What is front-end?",
		text: " The part of a website or web application that users interact with directly, typically involving HTML, CSS, and JavaScript to design and control the user interface.",
	},
	{
		id: 1,
		title: "What is React?",
		text: "A popular JavaScript library for building dynamic and interactive user interfaces, primarily using components and a virtual DOM for efficient updates.",
	},
	{
		id: 2,
		title: "What is TailwindCSS?",
		text: " A utility-first CSS framework that allows you to style web pages quickly by applying pre-defined classes directly in your HTML, offering flexibility and speed in design.",
	},
];


const treeViewData = [
	{
		label: "Home",
		path: "/",
		children: [],
	},
	{
		label: "Profile",
		path: "./profile",
		children: [
			{
				label: "Sign up",
				path: "./sign-up",
				children: [
					{
						label: "With gamil",
						path: "",
						children: [],
					},
					{
						label: "With Facebook",
						path: "",
						children: [],
					}
				],
			},
			{
				label: "Log in",
				path: "./log-in",
				children: [],
			},
		],
	},
	{
		label: "Contact",
		path: "./Contact",
		children: [
			{
				label: "Email",
				path: "",
				children: [],
			},
			{
				label: "Phone",
				path: "",
				children: [],
			},
		],
	},
]



export {
	accordionData,
	treeViewData,
}