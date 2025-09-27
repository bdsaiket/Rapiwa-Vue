<template>
	<div class="header">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="header__wrapper">
						<!-- Header Left Start -->
						<div class="header__left">
							<!-- Header Toggle -->
							<div class="header__toggle d-xl-none d-flex" data-bs-toggle="offcanvas"
								href="#offcanvasExample">
								<HugeiconsIcon :icon="Menu01Icon" />
							</div>
							<!-- Header Search -->
							<form action="#" class="search__form d-sm-block d-none">
								<input type="search" name="search" class="form-control" placeholder="Search here ..." />
								<button type="submit" class="submit__btn">
									<HugeiconsIcon :icon="Search01Icon" />
								</button>
							</form>
						</div>
						<!-- Header Left End -->

						<!-- Header Right Start -->
						<div class="header__right">
							<ul class="header__meta">
								<li>
									<div class="dropdown__item language">
										<a href="#!" data-bs-toggle="dropdown" class="dropdown__btn ">
											<img src="./../../../public/assets/images/flag/eng.png" alt="en" />
										</a>
										<!-- Dropdown Item -->
										<div class="dropdown-menu">
											<a href="#!" class="dropdown-item">
												<img src="./../../../public/assets/images/flag/eng.png" alt="en" />
												<span>English</span>
											</a>
											<a href="#!" class="dropdown-item">
												<img src="./../../../public/assets/images/flag/bd.png" alt="bd" />
												<span>Bangla</span>
											</a>
											<a href="#!" class="dropdown-item">
												<img src="./../../../public/assets/images/flag/arabic.png"
													alt="arabic" />
												<span>Arabic</span>
											</a>
										</div>
									</div>
								</li>
								<li>
									<div class="dropdown__item user__profile">
										<a href="#!" data-bs-toggle="dropdown" class="dropdown__btn text-heading"
											data-bs-auto-close="outside">
											<HugeiconsIcon :icon="ArrowDown01Icon" />
											<span>Foyshal Ahmed</span>
											<div class="thumb">
												<img src="./../../../public/assets/images/user-avatar.jpg" alt="avatar">
												<span class="active"></span>
											</div>
										</a>
										<!-- Dropdown Item -->
										<div class="dropdown-menu">
											<a href="#!" class="dropdown-item">
												<HugeiconsIcon :icon="UserIcon" />
												<span>Update Profile</span>
											</a>
											<a href="#!" class="dropdown-item">
												<HugeiconsIcon :icon="Diamond02Icon" />
												<span>Subscription</span>
											</a>
											<a href="#!" class="dropdown-item">
												<HugeiconsIcon :icon="LogoutCircle01Icon" />
												<span>Sign Out</span>
											</a>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<!-- Header Right End -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ArrowDown01Icon, Diamond02Icon, LogoutCircle01Icon, Menu01Icon, Search01Icon, UserIcon } from '@hugeicons/core-free-icons/index';
</script>
