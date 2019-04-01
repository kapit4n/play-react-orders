package models
import play.api.libs.json._

case class Order(var id: Int, var amount: Int)

object Order {
  implicit val implicitOrderWrites = new Writes[Order] {
    def writes(c: Order): JsValue = {
      Json.obj(
        "id" -> c.id,
        "amount" -> c.amount
      )
    }
  }
}