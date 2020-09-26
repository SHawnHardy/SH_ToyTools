try {
	var matchedProjects = flattenedProjects.filter(project => { return project.name === "OmniFocus Tutorial" })
	console.log(matchedProjects)
	if (matchedProjects.length === 0) {
		var project = new Project("OmniFocus Tutorial")
		project.task.sequential = true
		project.completedByChildren = true
		var tutorialTopics = [
			{ "title": "Introduction", "page": "index.html" },
			{ "title": "Console", "page": "console.html" },
			{ "title": "Inbox", "page": "inbox.html" },
			{ "title": "Due and Repeat", "page": "task.html" },
			{ "title": "Tags", "page": "tag.html" },
			{ "title": "Projects", "page": "project.html" },
			{ "title": "Plug-Ins", "page": "plug-in.html" },
			{ "title": "Cleanup and Restore", "page": "cleanup.html" }
		]
		var baseURL = "https://omni-automation.com/omnifocus/tutorial-ipados/"
		tutorialTopics.forEach(topicObj => {
			var tsk = new Task(topicObj.title, project)
			tsk.note = baseURL + topicObj.page
		})
		var projectID = project.task.id.primaryKey
		URL.fromString("omnifocus:///task/" + projectID).open()
	} else {
		var projectID = matchedProjects[0].task.id.primaryKey
		URL.fromString("omnifocus:///task/" + projectID).open()
		var alertMsg = "A project named “OmniFocus Tutorial” already exists."
		new Alert("Existing Project", alertMsg).show()
	}
} catch (err) { console.log(err) }
