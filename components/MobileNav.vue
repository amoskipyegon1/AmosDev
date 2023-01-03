<template>
    <ul class="w-full flex flex-row justify-between items-center">
        <li @click="$emit('ScrollFunction', 'header')" class="cursor-pointer">
            <div class="w-7 h-7 text-slate-500 hover:text-slate-300 transition-colors duration-200">
                <IconsHome />
            </div>
        </li>
        <li @click="$emit('ScrollFunction', 'skills')" class="cursor-pointer">
            <div class="w-7 h-7 text-slate-500 hover:text-slate-300 transition-colors duration-200">
                <IconsSkills />
            </div>
        </li>
        <li @click="$emit('ScrollFunction', 'experience')" class="cursor-pointer">
            <div class="w-7 h-7 text-slate-500 hover:text-slate-300 transition-colors duration-200">
                <IconsExperience />
            </div>
        </li>
        <li @click="$emit('ScrollFunction', 'projects')" class="cursor-pointer">
            <div class="w-7 h-7 text-slate-500 hover:text-slate-300 transition-colors duration-200">
                <IconsProjects />
            </div>
        </li>
    </ul>
</template>
