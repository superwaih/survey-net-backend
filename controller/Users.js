require("dotenv").config();
const cloudinary = require("../cloudinary/cloudinary");
const { UnauthenticatedError, BadRequestError } = require("../errors");
const User = require("../model/User");
const { StatusCodes } = require("http-status-codes");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zwingerfx@gmail.com",
    pass: "gpvgnuuqnvnsngyy",
  },
});
const Verifiedhtml = `<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
	<title></title>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" /><!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		.menu_block.desktop_hide .menu-links span {
			mso-hide: all;
		}

		@media (max-width:700px) {

			.desktop_hide table.icons-inner,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.image_block img.fullWidth {
				max-width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style>
</head>

<body style="background-color: #e6f0ef; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e6f0ef;" width="100%">
		<tbody>
			<tr>
				<td>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
										role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; background-position: center top; color: #000; width: 680px; margin: 0 auto;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="spacer_block block-1"
														style="height:15px;line-height:15px;font-size:1px;"> </div>
													<table border="0" cellpadding="15" cellspacing="0"
														class="image_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad">
																<div align="center" class="alignment"
																	style="line-height:10px"><img alt="logo"
																		src="cid:image1"
																		style="display: block; height: auto; border: 0; max-width: 136px; width: 100%;"
																		title="logo" width="136" /></div>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-3"
														style="height:15px;line-height:15px;font-size:1px;"></div>
													<table border="0" cellpadding="0" cellspacing="0"
														class="menu_block block-4" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="color:#021f2a;font-family:Georgia, Times, 'Times New Roman', serif;font-size:14px;letter-spacing:1px;text-align:center;">
																<table border="0" cellpadding="0" cellspacing="0"
																	role="presentation"
																	style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																	width="100%">
																	<tr>
																		<td class="alignment"
																			style="text-align:start;padding-left:25px;font-size:0px;">
																			<div class="menu-links">
																				<!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><![endif]--><!--[if mso]><td style="padding-top:15px;padding-right:10px;padding-bottom:5px;padding-left:10px"><![endif]--><a
																					
																					style="mso-hide:false;padding-top:8px;padding-bottom:8px;padding-left:14px;padding-right:14px;display:inline-block;color:#fff;border:#b3735a solid 6px;background-color:#b7b45f;font-family:Georgia, Times, 'Times New Roman', serif;font-size:17px;text-decoration:none;letter-spacing:1px;"
																					>Ibadan</a><!--[if mso]></td><td><![endif]--><span
																					class="sep"
																					style="font-size:14px;font-family:Georgia, Times, 'Times New Roman', serif;color:#021f2a;">|</span><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:15px;padding-right:10px;padding-bottom:5px;padding-left:10px"><![endif]--><a
																					
																					style="mso-hide:false;padding-top:8px;padding-bottom:8px;padding-left:14px;padding-right:14px;display:inline-block;color:#fff;border:#b3735a solid 6px;background-color:#b7b45f;font-family:Georgia, Times, 'Times New Roman', serif;font-size:17px;text-decoration:none;letter-spacing:1px;"
																					target="_self">Lagos</a><!--[if mso]></td><td><![endif]--><span
																					class="sep"
																					style="font-size:14px;font-family:Georgia, Times, 'Times New Roman', serif;color:#021f2a;">|</span><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:15px;padding-right:10px;padding-bottom:5px;padding-left:10px"><![endif]-->
																						<a
																					
																					style="mso-hide:false;padding-top:8px;padding-bottom:8px;padding-left:14px;padding-right:14px;display:inline-block;color:#fff;border:#b3735a solid 6px;background-color:#b7b45f;font-family:Georgia, Times, 'Times New Roman', serif;font-size:17px;text-decoration:none;letter-spacing:1px;"
																					>Abuja</a>
																			</div>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-5"
														style="height:20px;line-height:20px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; background-position: center top; color: #000; width: 680px; margin: 0 auto;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad" style="width:100%; padding: 1rem;">
																<div align="center" class="alignment"
																	style="line-height:10px"><img alt="plant"
																		src="cid:image2"
																		style="display: block; height: auto; border: 0; max-width: 340px; width: 100%;"
																		title="plant" width="340" /></div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<div class="spacer_block block-1"
														style="height:15px;line-height:15px;font-size:1px;"> </div>
													<table border="0" cellpadding="0" cellspacing="0"
														class="text_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:10px;">
																<div
																	style="font-family: Georgia, 'Times New Roman', serif">
																	<div class=""
																		style="font-size: 12px; font-family: Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 18px; color: #021f2a; line-height: 1.5;">
																		<p
																			style="margin: 0; font-size: 17px; text-align: left; mso-line-height-alt: 57px; letter-spacing: normal;">
																			<span style="font-size:38px;">Your document</span></p>
																		<p
																			style="margin: 0; font-size: 17px; text-align: left; mso-line-height-alt: 57px; letter-spacing: normal;">
																			<span style="font-size:38px;"><strong>Has been</strong></span></p>
																		<p
																			style="margin: 0; font-size: 17px; text-align: left; mso-line-height-alt: 57px; letter-spacing: normal;">
																			<span style="font-size:38px;"><em>Confirmed and</em></span></p>
																		<p
																			style="margin: 0; font-size: 17px; text-align: left; mso-line-height-alt: 57px; letter-spacing: normal;">
																			<span style="font-size:38px;">Verified.</span></p>
																			<a
																					
																					style="mso-hide:false;margin:5px;padding-top:8px;padding-bottom:8px;padding-left:14px;padding-right:14px;display:inline-block;color:#fff;border:#b3735a solid 6px;background-color:#b7b45f;font-family:Georgia, Times, 'Times New Roman', serif;font-size:17px;text-decoration:none;letter-spacing:1px;"
																					>RENT A HOME</a>
																					<a
																					
																					style="mso-hide:false;margin:5px;padding-top:8px;padding-bottom:8px;padding-left:14px;padding-right:14px;display:inline-block;color:#fff;border:#b3735a solid 6px;background-color:#b7b45f;font-family:Georgia, Times, 'Times New Roman', serif;font-size:17px;text-decoration:none;letter-spacing:1px;"
																					>BUY A HOME</a>
																		
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-3"
														style="height:15px;line-height:15px;font-size:1px;"> </div>
													<table border="0" cellpadding="0" cellspacing="0"
														class="button_block block-4" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					
					
				
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>`
const Notverifiedhtml = `<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
	<title></title>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" /><!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		.menu_block.desktop_hide .menu-links span {
			mso-hide: all;
		}

		@media (max-width:700px) {

			.desktop_hide table.icons-inner,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.image_block img.fullWidth {
				max-width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style>
</head>

<body style="background-color: #e6f0ef; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e6f0ef;" width="100%">
		<tbody>
			<tr>
				<td>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
										role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; background-position: center top; color: #000; width: 680px; margin: 0 auto;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="spacer_block block-1"
														style="height:15px;line-height:15px;font-size:1px;"> </div>
													<table border="0" cellpadding="15" cellspacing="0"
														class="image_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad">
																<div align="center" class="alignment"
																	style="line-height:10px"><img alt="logo"
																		src="cid:image1"
																		style="display: block; height: auto; border: 0; max-width: 136px; width: 100%;"
																		title="logo" width="136" /></div>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-3"
														style="height:15px;line-height:15px;font-size:1px;"></div>
													<table border="0" cellpadding="0" cellspacing="0"
														class="menu_block block-4" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="color:#021f2a;font-family:Georgia, Times, 'Times New Roman', serif;font-size:14px;letter-spacing:1px;text-align:center;">
																<table border="0" cellpadding="0" cellspacing="0"
																	role="presentation"
																	style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																	width="100%">
																	<tr>
																		<td class="alignment"
																			style="text-align:start;padding-left:25px;font-size:0px;">
																			<div class="menu-links">
																				<!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><![endif]--><!--[if mso]><td style="padding-top:15px;padding-right:10px;padding-bottom:5px;padding-left:10px"><![endif]--><a
																					
																					style="mso-hide:false;padding-top:8px;padding-bottom:8px;padding-left:14px;padding-right:14px;display:inline-block;color:#fff;border:#b3735a solid 6px;background-color:#b7b45f;font-family:Georgia, Times, 'Times New Roman', serif;font-size:17px;text-decoration:none;letter-spacing:1px;"
																					>Ibadan</a><!--[if mso]></td><td><![endif]--><span
																					class="sep"
																					style="font-size:14px;font-family:Georgia, Times, 'Times New Roman', serif;color:#021f2a;">|</span><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:15px;padding-right:10px;padding-bottom:5px;padding-left:10px"><![endif]--><a
																					
																					style="mso-hide:false;padding-top:8px;padding-bottom:8px;padding-left:14px;padding-right:14px;display:inline-block;color:#fff;border:#b3735a solid 6px;background-color:#b7b45f;font-family:Georgia, Times, 'Times New Roman', serif;font-size:17px;text-decoration:none;letter-spacing:1px;"
																					target="_self">Lagos</a><!--[if mso]></td><td><![endif]--><span
																					class="sep"
																					style="font-size:14px;font-family:Georgia, Times, 'Times New Roman', serif;color:#021f2a;">|</span><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:15px;padding-right:10px;padding-bottom:5px;padding-left:10px"><![endif]-->
																						<a
																					
																					style="mso-hide:false;padding-top:8px;padding-bottom:8px;padding-left:14px;padding-right:14px;display:inline-block;color:#fff;border:#b3735a solid 6px;background-color:#b7b45f;font-family:Georgia, Times, 'Times New Roman', serif;font-size:17px;text-decoration:none;letter-spacing:1px;"
																					>Abuja</a>
																			</div>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-5"
														style="height:20px;line-height:20px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; background-position: center top; color: #000; width: 680px; margin: 0 auto;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad" style="width:100%; padding: 1rem;">
																<div align="center" class="alignment"
																	style="line-height:10px"><img alt="plant"
																		src="cid:image2"
																		style="display: block; height: auto; border: 0; max-width: 340px; width: 100%;"
																		title="plant" width="340" /></div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<div class="spacer_block block-1"
														style="height:15px;line-height:15px;font-size:1px;"> </div>
													<table border="0" cellpadding="0" cellspacing="0"
														class="text_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:10px;">
																<div
																	style="font-family: Georgia, 'Times New Roman', serif">
																	<div class=""
																		style="font-size: 12px; font-family: Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 18px; color: #021f2a; line-height: 1.5;">
																		<p
																			style="margin: 0; font-size: 17px; text-align: left; mso-line-height-alt: 57px; letter-spacing: normal;">
																			<span style="font-size:38px;">Sorry...</span></p>
																		<p
																			style="margin: 0; font-size: 17px; text-align: left; mso-line-height-alt: 57px; letter-spacing: normal;">
																			<span style="font-size:38px;"><strong>The document</strong></span></p>
																		<p
																			style="margin: 0; font-size: 17px; text-align: left; mso-line-height-alt: 57px; letter-spacing: normal;">
																			<span style="font-size:38px;"><em>submitted could</em></span></p>
																		<p
																			style="margin: 0; font-size: 17px; text-align: left; mso-line-height-alt: 57px; letter-spacing: normal;">
																			<span style="font-size:38px;">not be confirmed.</span></p>
																			<a
																					
																					style="mso-hide:false;margin:5px;padding-top:8px;padding-bottom:8px;padding-left:14px;padding-right:14px;display:inline-block;color:#fff;border:#b3735a solid 6px;background-color:#b7b45f;font-family:Georgia, Times, 'Times New Roman', serif;font-size:17px;text-decoration:none;letter-spacing:1px;"
																					>RENT A HOME</a>
																					<a
																					
																					style="mso-hide:false;margin:5px;padding-top:8px;padding-bottom:8px;padding-left:14px;padding-right:14px;display:inline-block;color:#fff;border:#b3735a solid 6px;background-color:#b7b45f;font-family:Georgia, Times, 'Times New Roman', serif;font-size:17px;text-decoration:none;letter-spacing:1px;"
																					>BUY A HOME</a>
																		
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-3"
														style="height:15px;line-height:15px;font-size:1px;"> </div>
													<table border="0" cellpadding="0" cellspacing="0"
														class="button_block block-4" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					
					
				
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>`

const getAllUsers = async (req, res) => {
	try {
		const users = await User.find({}, 'email firstname lastname payment_status verification type verified_status document');
		res.status(200).json(users);
	  } catch (error) {
		res.status(500).json({ error: 'Error fetching users' });
	  }


};

const createUser = async (req, res) => {
  const { email } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(StatusCodes.BAD_REQUEST).json({
      payload: "user already exists",
      status: StatusCodes.BAD_REQUEST,
    });
  } else {
    const user = await User.create({ ...req.body });
    res
      .status(StatusCodes.CREATED)
      .json({ payload: user, status: StatusCodes.CREATED });
  }
};
const submitInformation = async (req, res) => {
  const email = req.params.email;
  const { images } = req.body;
  const userExists = await User.findOne({email})
  if(userExists){
    const uploadedImgs = images?.map(async (image) => {
      const upload = await cloudinary.uploader.upload(
        image,
        {
          upload_preset: "unsigned_upload",
          allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
        },
        function (error, result) {
          if (error) {
            console.log(error);
          }
        }
      );
      return upload;
    });
  
    try {
      const fulfilled = await Promise.all(uploadedImgs).then((values) => {
        return values;
      });
      const publicIds = fulfilled.map((image) => {
        return image.url;
      });
      const currentUser = await User.findOneAndUpdate(
        { email: email },
        { ...req.body, document: publicIds },
        { returnOriginal: false }
      );
  
      if (currentUser) {
        const mailOptions = {
          from: "olaegbejoe@gmail.com",
          to: "olaegbejoe@gmail.com",
          subject: "New Verification Request",
          html: `<h5>Someone just submitted  in with the following info </h5>
          <p>with the following information </p> 
          <p>firstname:${currentUser.firstname} </p>
          <p>email:${currentUser.email} </p>
    
          <p>lastname:${currentUser.lastname} </p>
          <p>verification Method:${currentUser.verification_type} </p>
          <p>Document: ${currentUser.document[0]}</p>
    
    
          
    
          please visit the admin page to verify their document `,
        };
  
        res.status(200).json({ msg: "done", payload: currentUser });
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
          }
        });
      } else {
        res.status(404).json({
          msg: "User not found",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }else{
    res.status(StatusCodes.BAD_REQUEST).json({
      payload: "You've not created an account",
      status: StatusCodes.BAD_REQUEST,
    });
  }

 
};

const updatePaymentStatus = async (req, res) => {
  const email = req.params.email;
  try {
    const currentUser = await User.findOneAndUpdate(
      { email: email },
      { ...req.body },
      { returnOriginal: false }
    );

    if (currentUser) {
      res.status(200).json({ msg: "done", payload: currentUser });
    } else {
      res.status(404).json({ msg: "user not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const verifyStatus = async (req, res) => {
  const email = req.params.email;

  try {
    const currentUser = await User.findOneAndUpdate(
      { email: email },
      { ...req.body },
      { returnOriginal: false }
    );

    if (currentUser) {
      const mailOptions = {
        from: "Olaegbejoe@gmail.com",
        to: email,
        subject: "Update on Verification Request",
        html: currentUser.verified_status ?  Verifiedhtml : Notverifiedhtml,
        attachments:[
          {
            filename: 'logo_3.png',
            path: './images/logo_3.png',
            cid: "image1"
          },
          {
            filename: 'plant.png',
            path: './images/plant.png',
            cid: "image2"
          },

        ]
      }

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
        }
      });
      res.status(200).json({ msg: "done", payload: currentUser });
    } else {
      res.status(404).json({ msg: "user not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
const getSingleUser = async (req, res) => {
  const userid = req.params.id;
  const currentUser = await User.findById(userid);
  res.json(currentUser);
};

module.exports = {
  getAllUsers,
  getSingleUser,
  verifyStatus,
  createUser,
  submitInformation,
  updatePaymentStatus,
};
