using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UnuninSofa.Data.Migrations
{
    public partial class ConfigManyToManyColorAndProductDetail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Colors_ProductDetails_ProductDetailId",
                table: "Colors");

            migrationBuilder.DropIndex(
                name: "IX_Colors_ProductDetailId",
                table: "Colors");

            migrationBuilder.DropColumn(
                name: "ProductDetailId",
                table: "Colors");

            migrationBuilder.CreateTable(
                name: "ColorProductDetail",
                columns: table => new
                {
                    ColorsId = table.Column<int>(type: "int", nullable: false),
                    ProductDetailsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ColorProductDetail", x => new { x.ColorsId, x.ProductDetailsId });
                    table.ForeignKey(
                        name: "FK_ColorProductDetail_Colors_ColorsId",
                        column: x => x.ColorsId,
                        principalTable: "Colors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ColorProductDetail_ProductDetails_ProductDetailsId",
                        column: x => x.ProductDetailsId,
                        principalTable: "ProductDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "c6a4240e-abbf-445f-8b07-f0cea6e86f79");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "9879ebdc-8e9c-4110-911b-477f774ca2ee");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "73db84c8-80ca-401d-8120-8d88ac685122", "AQAAAAEAACcQAAAAEALgXUK2sVY6XdgxhCXaKbwY8Pq3LaISFiGUjrqAk6iAeo4Bj8wvqkkoi9yeqnGHLA==", "a08939a4-2ace-4b05-b03e-b413578e9a9d" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 55, 29, 146, DateTimeKind.Local).AddTicks(4846));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 55, 29, 146, DateTimeKind.Local).AddTicks(4868));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 55, 29, 146, DateTimeKind.Local).AddTicks(4870));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 55, 29, 146, DateTimeKind.Local).AddTicks(4871));

            migrationBuilder.CreateIndex(
                name: "IX_ColorProductDetail_ProductDetailsId",
                table: "ColorProductDetail",
                column: "ProductDetailsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ColorProductDetail");

            migrationBuilder.AddColumn<int>(
                name: "ProductDetailId",
                table: "Colors",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "f6770be9-83da-4c94-8872-a7b07c56fddd");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "0f21465e-0942-487d-8391-f4747eb00be1");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "a0fe2914-32ae-4e0d-b666-7abca3f8cbf8", "AQAAAAEAACcQAAAAEP8N3b0LYKh+xBPeUgxcRkBd/wxyiZO/9FMb39MSG6GwJ4RCVPxSHAENQ8Jlqi4ijA==", "6b9ace9d-e854-4c06-b76c-95d3a9b409ff" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 45, 16, 737, DateTimeKind.Local).AddTicks(7303));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 45, 16, 737, DateTimeKind.Local).AddTicks(7326));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 45, 16, 737, DateTimeKind.Local).AddTicks(7329));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 45, 16, 737, DateTimeKind.Local).AddTicks(7331));

            migrationBuilder.CreateIndex(
                name: "IX_Colors_ProductDetailId",
                table: "Colors",
                column: "ProductDetailId");

            migrationBuilder.AddForeignKey(
                name: "FK_Colors_ProductDetails_ProductDetailId",
                table: "Colors",
                column: "ProductDetailId",
                principalTable: "ProductDetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
