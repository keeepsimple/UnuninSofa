using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UnuninSofa.Data.Migrations
{
    public partial class ConfigManyToManyMaterialAndProduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Materials_ProductDetails_ProductDetailId",
                table: "Materials");

            migrationBuilder.DropIndex(
                name: "IX_Materials_ProductDetailId",
                table: "Materials");

            migrationBuilder.DropColumn(
                name: "ProductDetailId",
                table: "Materials");

            migrationBuilder.CreateTable(
                name: "MaterialProductDetail",
                columns: table => new
                {
                    MaterialsId = table.Column<int>(type: "int", nullable: false),
                    ProductDetailsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaterialProductDetail", x => new { x.MaterialsId, x.ProductDetailsId });
                    table.ForeignKey(
                        name: "FK_MaterialProductDetail_Materials_MaterialsId",
                        column: x => x.MaterialsId,
                        principalTable: "Materials",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MaterialProductDetail_ProductDetails_ProductDetailsId",
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
                name: "IX_MaterialProductDetail_ProductDetailsId",
                table: "MaterialProductDetail",
                column: "ProductDetailsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MaterialProductDetail");

            migrationBuilder.AddColumn<int>(
                name: "ProductDetailId",
                table: "Materials",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "63df499e-ad17-4faa-a9ba-49b3c23e2865");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "57a873cb-76cf-46f4-b6a6-7864928af4a0");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "a5fb7577-3e6d-45d7-a77a-ca3584988650", "AQAAAAEAACcQAAAAEGAbyMb+VoldDAmmC2OKzMnlxA0wwriOKGM+y3MGvCLtug6pbxmxPzpkNz0hFSK9/w==", "8d9bdc82-5e7e-4ce1-b5ff-b0f4129ee02d" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 40, 46, 281, DateTimeKind.Local).AddTicks(4340));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 40, 46, 281, DateTimeKind.Local).AddTicks(4360));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 40, 46, 281, DateTimeKind.Local).AddTicks(4363));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 8, 10, 40, 46, 281, DateTimeKind.Local).AddTicks(4365));

            migrationBuilder.CreateIndex(
                name: "IX_Materials_ProductDetailId",
                table: "Materials",
                column: "ProductDetailId");

            migrationBuilder.AddForeignKey(
                name: "FK_Materials_ProductDetails_ProductDetailId",
                table: "Materials",
                column: "ProductDetailId",
                principalTable: "ProductDetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
