<?php
/**
 * Plugin Name: Simple Unit Calculators
 * Version: 4.0.0
 */

if (!defined('ABSPATH')) exit;

add_action('wp_enqueue_scripts', function () {

    $base = plugin_dir_url(__FILE__) . 'assets/';

    wp_enqueue_script('suc-angle',        $base.'angle.js', [], '3.0', true);
    wp_enqueue_script('suc-energy',       $base.'energy.js', [], '3.0', true);
    wp_enqueue_script('suc-acceleration', $base.'acceleration.js', [], '3.0', true);
    wp_enqueue_script('suc-length',       $base.'length.js', [], '3.0', true);
    wp_enqueue_script('suc-area',         $base.'area.js', [], '3.0', true);
    wp_enqueue_script('suc-temperature',  $base.'temperature.js', [], '3.0', true);
	wp_enqueue_script('suc-pressure',  $base.'pressure.js',  [], '3.1', true);
	wp_enqueue_script('suc-mass',      $base.'mass.js',      [], '3.1', true);
	wp_enqueue_script('suc-time',      $base.'time.js',      [], '3.1', true);
	wp_enqueue_script('suc-electric',  $base.'electric.js',  [], '3.1', true);
	wp_enqueue_script('suc-volume',    $base.'volume.js',    [], '3.2', true);
	wp_enqueue_script('suc-frequency', $base.'frequency.js', [], '3.2', true);
	wp_enqueue_script('suc-power',     $base.'power.js',     [], '3.2', true);
	wp_enqueue_script('suc-magnetic',  $base.'magnetic.js',  [], '3.2', true);
	wp_enqueue_script('suc-photometry', $base.'photometry.js', [], '3.3', true);
	wp_enqueue_script('suc-radiation',  $base.'radiation.js',  [], '3.3', true);
	wp_enqueue_script('suc-flow',       $base.'flow.js',       [], '3.3', true);
	wp_enqueue_script('suc-angular',    $base.'angular.js',    [], '3.3', true);




    wp_enqueue_script(
        'suc-main',
        $base.'main.js',
        [
          'suc-angle',
          'suc-energy',
          'suc-acceleration',
          'suc-length',
          'suc-area',
          'suc-temperature'
        ],
        '3.1',
        true
    );
});
