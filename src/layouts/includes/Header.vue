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
										<div class="dropdown-menu w-30">
											<div class="profile__card">
												<div class="profile__header text-center">
													<div class="avatar">
														<img src="../assets/images/user/avatar-1.jpg" alt="avatar" />
														<span class="edit__icon"><i
																class="hgi hgi-stroke hgi-edit-02"></i></span>
													</div>
													<div class="content">
														<h4>John Doe</h4>
														<p>admin@example.com</p>
													</div>
												</div>

												<div class="profile__options">
													<a href="#" class="option">
														<span class="icon">
															<HugeiconsIcon :icon="EditUser02Icon" />
														</span>
														<span>Edit Profile</span>
														<span class="arrow">
															<HugeiconsIcon :icon="ArrowRight01Icon" />
														</span>
													</a>
													<a href="#" class="option">
														<span class="icon">
															<HugeiconsIcon :icon="Tag01Icon" />
														</span>
														<span>Change Password</span>
														<span class="arrow">
															<HugeiconsIcon :icon="ArrowRight01Icon" />
														</span>
													</a>
												</div>

												<div class="logout text-center">
													<a href="#" class="solid__btn"><i
															class="hgi hgi-stroke hgi-logout-01"></i>Log
														Out</a>
												</div>
											</div>
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
import { Menu01Icon, Search01Icon, ArrowDown01Icon, ArrowRight01Icon, EditUser02Icon, Tag01Icon } from '@hugeicons/core-free-icons'
</script>
