package controllers

import javax.inject._

import play.api.libs.json._
import play.api.mvc._

import models._

@Singleton
class OrderController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def list = Action {
    Ok(Json.toJson(Seq(Order(1, 10), Order(1, 20))))
  }
}
