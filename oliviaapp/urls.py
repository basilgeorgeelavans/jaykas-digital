from django.urls import path
from oliviaapp import views
from django.contrib.auth import views as auth_views

urlpatterns = [
path('',views.login, name='login'),
path('index/',views.index, name='index'),
path('day1/',views.day1, name='day1'),
path('day2/',views.day2, name='day2'),
path('day2continues/',views.day2_1, name='day2.1'),
path('day3/',views.day3, name='day3'),
path('day3continues/',views.day3_1, name='day3.1'),
path('day4/',views.day4, name='day4'),
path('day5/',views.day5, name='day5'),
path('day6/',views.day6, name='day6'),
path('day7/',views.day7, name='day7'),
path('day8/',views.day8, name='day8'),
path('day9/',views.day9, name='day9'),
path('day10/',views.day10, name='day10'),
path('day11/',views.day11, name='day11'),
path('day12/',views.day12, name='day12'),
path('day13/',views.day13, name='day13'),
path('day14/',views.day14, name='day14'),
path('day15/',views.day15, name='day15'),
path('day16/',views.day16, name='day16'),
path('day17/',views.day17, name='day17'),
path('day18/',views.day18, name='day18'),
path('day19/',views.day19, name='day19'),
path('day20/',views.day20, name='day20'),
path('day21/',views.day21, name='day21'),
path('day22/',views.day22, name='day22'),
path('day23/',views.day23, name='day23'),
path('day24/',views.day24, name='day24'),
path('day25/',views.day25, name='day25'),
path('day26/',views.day26, name='day26'),
path('day27/',views.day27, name='day27'),
path('day28/',views.day28, name='day28'),
path('day29/',views.day29, name='day29'),
path('day30/',views.day30, name='day30'),
path('day31/',views.day31, name='day31'),
path('day32/',views.day32, name='day32'),
path('day33/',views.day33, name='day33'),
path('day34/',views.day34, name='day34'),
path('day35/',views.day35, name='day35'),
path('day36/',views.day36, name='day36'),
path('day37/',views.day37, name='day37'),
path('day38/',views.day38, name='day38'),
path('day39/',views.day39, name='day39'),
path('day40/',views.day40, name='day40'),
path('day41/',views.day41, name='day41'),
path('day42/',views.day42, name='day42'),
path('day43/',views.day43, name='day43'),
path('day44/',views.day44, name='day44'),
path('day45/',views.day45, name='day45'),
path('day46/',views.day46, name='day46'),
path('day47/',views.day47, name='day47'),
path('day48/',views.day48, name='day48'),
path('day49/',views.day49, name='day49'),
path('day50/',views.day50, name='day50'),
path('day51/',views.day51, name='day51'),
path('day52/',views.day52, name='day52'),
path('day53/',views.day53, name='day53'),
path('day54/',views.day54, name='day54'),
path('day55/',views.day55, name='day55'),
path('day56/',views.day56, name='day56'),
path('day57/',views.day57, name='day57'),
path('day58/',views.day58, name='day58'),
path('day59/',views.day59, name='day59'),
path('day60/',views.day60, name='day60'),

path('test/',views.test, name='test'),
]
