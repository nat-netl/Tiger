<style>
<?php include 'calendarPlan.css';
?>
</style>

<?php
$mounthOptions = [
	0 => [
		"month"  => [
			"Январь" ,
			"event" => [
				0 => [
					"day" => 4,
					"title" => "Заголовок",
					"text" => "111"
				]
			]
		]
	],
	1 => [
		"month"  => ["Февраль"]	
	],
	2 => [
		"month"  => ["Март",
		"event" =>[
				0 => [
					"day" => 31,
					"title" => "Заголовок",
					"text" => "12222"
				],
				1 =>  [
					"day" => 5,
					"title" => "Заголовок",
					"text" => "12222"
				]
			]
		]	
	],
	3 => [
		"month"  => ["Апрель",
		"event" => []]	
	],
	4 => [
		"month"  => ["Май",
		"event" => []]	
	],
	5 => [
		"month"  => ["Июнь",
		"event" => []]	
	],
	6 => [
		"month"  => ["Июль",
		"event" => []]	
	],
	7 => [
		"month"  => ["Август",
		"event" => []]
	],
	8 => [
		"month"  => ["Сентябрь",
		"event" => []]	
	],
	9 => [
		"month"  => ["Октябрь",
		"event" => []	]
	],
	10 => [
		"month"  => ["Ноябрь",
		"event" => []]	
	],
	11 => [
		"month"  => ["Декабрь",
		"event" => []]	
	]
	];


	$days = [
		0 => 'ПН', 1 => 'ВТ', 2 => 'СР', 3 => 'ЧТ', 4 => 'ПТ', 5 => 'СБ', 6 => 'ВС'
	]
?>

<div class="calendar-plan">
	<div class="calendar-plan__title">
		<div class="container">
			<h2 class="title-calendar-plan__text">
				Календарный план
			</h2>
		</div>
	</div>

	<div class="container">
		<div class="white-line"></div>
	</div>

	<div class="calendar-wrapper">
		<div class="container">
			<div class="month-items">
				<?php foreach($mounthOptions as $index => $option): 
?>
				<div class="month-items__item">
					<table class="item-month-items__table" cellspacing="8.37" cellpadding="4.37">
						<h2>
							<?php echo $option['month'][0]?>
						</h2>
						<thead>
							<tr>
								<?php
								
									foreach ($days as $day) {
										echo'<th>' . $day . '</th>';
									}
									
								?>
							</tr>
						</thead>

						<tbody>
							<?php 
								for ($day = 1; $day < 32; $day++) {
									$day = $day < 10 ? '0'.$day : $day;
									$activeDay = true;

									if (!empty ($option['month']['event'])) {
										foreach ($option['month']['event'] as $event) {
											if ($event['day'] == $day && !empty ($event)) {
												echo '
													<td class="event">
														<div class="day">
															'. $day .'
														</div>
														<div class="event-item">
															<div class="calendar-event-bg"></div>
															<div class="event-text__container">
																<div class="close-event__text"></div>
																<h2 class="container-event-text__title">'. $event['title'] .'</h2>
																<div class="container-event-text__text">
																	'. $event['text'] .'
																</div>
															</div>
														</div>
												</td>';
												$activeDay = false;
											} 
										}
										if ($activeDay) echo '<td>'. $day .'</td>';
									}else {
										echo '<td>'. $day .'</td>';
									}

									if ($day % 7 == 0) echo "<tr />";
								}
							?>
							<td class="color-gray">01</td>
							<td class="color-gray">02</td>
							<td class="color-gray">03</td>
							<td class="color-gray">04</td>
						</tbody>
					</table>
				</div>
				<?php endforeach;?>
			</div>
		</div>
	</div>
</div>