import { sectwoDiv } from "./card.js"
import { rightDiv } from "./image.js"
import { leftDiv } from "./info.js"

const dataOne = {
    title:      "IAN COMPILATION",
    para:       "Hi.my name is Edrian Sino i am glad to see you i enjoy my course as a BSIT student i want to learn more and improve my brain and explore about javascript.”",
    button:     "Contact me",
    image:      "ian.jpg"
}

const dataTwo = {
    title2:     "ACTIVITIES",

    image1:     "dog.jpg",
    para1:      "A Project Dog is the dog that presents you with significant behavioural problems. Maybe the dog came to you with issues, maybe you created the issues, or maybe the dog developed them over time. Regardless of how it happened, now you have a Project Dog.",
    button1:    "View",

    image2:     "ss1.png",
    para2:      "A project is a set of tasks that must be completed within a defined timeline to accomplish a specific set of goals. These tasks are completed by a group of people known as the project team, which is led by a project manager, who oversees the planning, scheduling, tracking and successful completion of projects.",
    button2:    "View",

    image3:     "ss.png",
    para3:      "A project is a set of tasks that must be completed within a defined timeline to accomplish a specific set of goals. These tasks are completed by a group of people known as the project team, which is led by a project manager, who oversees the planning, scheduling, tracking and successful completion of projects.",
    button3:    "View"
}

const {title, para, button, image} = dataOne
const {title2, image1, image2, image3, para1, para2, para3, button1, button2, button3} = dataTwo

sectionOne.append(leftDiv(title, para, button))
sectionOne.append(rightDiv(image))
sectionTwo.append(sectwoDiv(title2, image1, image2, image3, para1, para2, para3, button1, button2, button3))
