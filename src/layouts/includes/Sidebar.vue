<template>
	<!-- Sidebar Start -->
	<aside class="layout__menu offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample">
		<!-- Brand Logo Start -->
		<div class="brand__logo">
			<router-link to="/" class="logo">
				<img src="./../../../public/assets/images/logo/logo.svg" alt="logo" />
			</router-link>
		</div>
		<!-- Menu List Start -->
		<ul class="menu__list accordion" id="sidebarMenu">
			<li class="menu__item">
				<span class="header__text">Menu</span>
			</li>
			<li class="menu__item">
				<router-link :to="{ name: 'dashboard' }" class="menu__link ">
					<span class="menu__icon">
						<HugeiconsIcon :icon="DashboardCircleIcon" />
					</span>
					<span class="menu__text">Dashboard</span>
				</router-link>
			</li>
			<li class="menu__item">
				<router-link :to="{ name: 'device' }" class="menu__link">
					<span class="menu__icon">
						<HugeiconsIcon :icon="WhatsappIcon" />
					</span>
					<span class="menu__text">Devices</span>
				</router-link>
			</li>
			<li class="menu__item">
				<router-link :to="{ name: 'ai-agent' }" class="menu__link">
					<span class="menu__icon">
						<HugeiconsIcon :icon="RoboticIcon" />
					</span>
					<span class="menu__text">Train AI Agent</span>
				</router-link>
			</li>
			<li class="menu__item">
				<router-link :to="{ name: 'team' }" class="menu__link">
					<span class="menu__icon">
						<HugeiconsIcon :icon="UserMultiple03Icon" />
					</span>
					<span class="menu__text">Team Member</span>
				</router-link>
			</li>
			<li class="menu__item">
				<router-link :to="{ name: 'ticket' }" class="menu__link">
					<span class="menu__icon">
						<HugeiconsIcon :icon="Ticket01Icon" />
					</span>
					<span class="menu__text">Tickets</span>
				</router-link>
			</li>
			<li class="menu__item">
				<router-link :to="{ name: 'setting' }" class="menu__link">
					<span class="menu__icon">
						<HugeiconsIcon :icon="Settings01Icon" />
					</span>
					<span class="menu__text">Settings</span>
				</router-link>
			</li>
			<li class="menu__item">
				<router-link to="/" class="menu__link" data-bs-toggle="collapse" data-bs-target="#setting">
					<span class="menu__icon">
						<HugeiconsIcon :icon="Settings01Icon" />
					</span>
					<span class="menu__text">Settings</span>
					<div class="arrow ms-auto">
						<HugeiconsIcon :icon="ArrowDown01Icon" :size="16" />
					</div>
				</router-link>

				<ul id="setting" class="sub-menu collapse" data-bs-parent="#sidebarMenu">
					<li><router-link to="">Setting One</router-link></li>
					<li><router-link to="">Setting Two</router-link></li>
					<li><router-link to="">Setting Three</router-link></li>
					<li><router-link to="">Setting Four</router-link></li>
				</ul>
			</li>
			<li class="menu__item">
				<router-link to="/subscription" class="menu__link">
					<span class="menu__icon">
						<HugeiconsIcon :icon="Diamond02Icon" />
					</span>
					<span class="menu__text">Subscription</span>
				</router-link>
			</li>
			<li class="menu__item">
				<span class="header__text">Others</span>
			</li>
			<li class="menu__item">
				<router-link to="/" class="menu__link">
					<span class="menu__icon">
						<HugeiconsIcon :icon="Ticket01Icon" />
					</span>
					<span class="menu__text">Documentation</span>
				</router-link>
			</li>
			<li class="menu__item">
				<router-link to="/" class="menu__link">
					<span class="menu__icon">
						<HugeiconsIcon :icon="Settings01Icon" />
					</span>
					<span class="menu__text">FAQ</span>
				</router-link>
			</li>
			<li class="menu__item">
				<router-link to="/" class="menu__link">
					<span class="menu__icon">
						<HugeiconsIcon :icon="Diamond02Icon" />
					</span>
					<span class="menu__text">Contact Us</span>
				</router-link>
			</li>
		</ul>
	</aside>
	<!-- Sidebar End -->
</template>

<script setup>
import { DashboardCircleIcon, WhatsappIcon, RoboticIcon, UserMultiple03Icon, Ticket01Icon, Settings01Icon, Diamond02Icon, ArrowDown01Icon } from '@hugeicons/core-free-icons'
</script>
