//sidebar icons
import Home from './assets/sidebarIcons/HomeLogo@2x.png';
import MyTasks from './assets/sidebarIcons/MyTasksLogo@2x.png';
import Pods from './assets/sidebarIcons/GoalsLogo@2x.png';
import Goals from './assets/sidebarIcons/GoalsLogo@2x.png';
import Project from './assets/sidebarIcons/Project.png';
import Profile from './assets/sidebarIcons/Profile.png';
//header icons
import AddTask from './assets/headerIcons/AddTask.png';
import Star from './assets/headerIcons/Star.png';
import Calendar from './assets/headerIcons/Calendar.png';
import Mail from './assets/headerIcons/Mail.png';
import Notification from './assets/headerIcons/Notification.png';
import Settings from './assets/headerIcons/Settings.png';
//main body icons
import Feed from './assets/contentbodyIcons/feed.png';
import Group from './assets/contentbodyIcons/Group.png';
import Icon from './assets/contentbodyIcons/Icon.png';
import User from './assets/contentbodyIcons/user.png';

const sidebarMenus=[
    {
        icon: Home,
        name: 'home'
    },
    {
        icon: MyTasks,
        name: 'my tasks'
    },
    {
        icon: Pods,
        name: 'pods'
    },
    {
        icon: Goals,
        name: 'goals'
    },
    {
        icon: Project,
        name:'projects'
    },
    {
        icon: Profile,
        name: 'profile'
    },
];

const headerMenus=[
    {
        icon: AddTask,
        name: 'add task'
    },
    {
        icon: Star,
        name: 'star'
    },
    {
        icon: Mail,
        name: 'mail'
    },
    {
        icon: Calendar,
        name: 'calender'
    },
    {
        icon: Notification,
        name:'notification'
    },
    {
        icon: Settings,
        name: 'settings'
    },
];

const podsMenus=[
    {
        icon: User,
        name: 'all pods',
        options:['to do','in progress', 'review', 'done']
    },
    {
        icon: Feed,
        name: 'feed',
        options:['to do','in progress', 'review', 'done']
    },
    {
        icon: Group,
        name: 'list',
        options:['to do','in progress', 'review', 'done']
    },
    {
        icon: Icon,
        name: 'boards',
        options:['to do','in progress', 'review', 'done']
    },
    {
        icon: Group,
        name:'gantt',
        options:['to do','in progress', 'review', 'done']
    },
];


export {sidebarMenus, headerMenus, podsMenus}