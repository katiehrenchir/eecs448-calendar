<?php

class Event {
  public $name = '';
  public $desc = '';
  public $startDate = '';
  public $endDate = '';
  public $startTime = '';
  public $endTime = '';

  function __construct($par1, $par2, $par3, $par4, $par5, $par6) {
    $this->name = $par1;
    $this->desc = $par2;
    $this->startDate = $par3;
    $this->endDate = $par4;
    $this->startTime = $par5;
    $this->endTime = $par6;
  }

  function getName() {
    return $this->name;
  }

  function getDesc() {
    return $this->desc;
  }

  function getStartDate() {
    return $this->startDate;
  }

  function getEndDate(){
    return $this->endDate;
  }

  function getStartTime(){
    return $this->startTime;
  }

  function getEndTime(){
    return $this->endTime;
  }

}

?>
