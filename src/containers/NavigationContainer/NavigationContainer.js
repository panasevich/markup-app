import React from "react";

import Navigation from "../../components/Navigation/Navigation";

const navMock = [
    {name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },
    {name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },
    {name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },
    {name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },
    {name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },
    {name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },
    {name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },{name: "Use F for closed", isActive: false},
    {
        name: "Use F for open",
        isActive: true,
        icon: 'face',
        children: [
            {name: 'Something', icon: 'accessibility'},
            {name: 'Something1', icon: 'alarm'}
        ]
    },




];

export default function NavigationContainer({items = navMock}) {
    return(<Navigation items={items} />)
}
