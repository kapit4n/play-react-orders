package models
import play.api.libs.json._

case class Customer(var id: Int, var name: String)

object Customer {
  implicit val implicitCustomerWrites = new Writes[Customer] {
    def writes(c: Customer): JsValue = {
      Json.obj(
        "id" -> c.id,
        "name" -> c.name
      )
    }
  }
}
