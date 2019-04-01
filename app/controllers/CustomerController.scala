package controllers

import javax.inject._

import play.api.libs.json._
import play.api.mvc._

import models._

@Singleton
class CustomerController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def list = Action {
    Ok(Json.toJson(Seq(Customer(1, "Luis"), Customer(1, "Hansel"))))
  }
}
